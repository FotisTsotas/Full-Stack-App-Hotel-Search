// Initialize global variables
let CHECK_IN_DATE_LIST = null;
let CHECK_OUT_DATE_LIST = null;
let minDate

// Query Selectors
const $SearchbtnList = document.querySelector("#submitButtonList");
const $city = document.querySelector("#City_option_list");

// Initially the Search button must be disable
$SearchbtnList.disabled = true;

// Flag: will be True ONLY IF check-in date and check-out date are in the right cronological order
let VALID_DATE_LIST = false;

$('#submitButtonList').css("background-color", "gray");

// Changes the appearance of the Search Button
changebtnList = () => {
  // Add event-listener for the Search Button for when the mouse-out
  $("#submitButtonList").mouseout(function(){
    $("#submitButtonList").css("background-color", "#ff764b");
  });

  // Change the style
  $('#submitButtonList').css("background-color", "#ff764b");

  // Add event-listener for the Search Button for when the mouse is over
  $("#submitButtonList").mouseover(function(){
    $("#submitButtonList").css("background-color", " #a20d01");
  });
}

// Changes the datepickers style back to default
defaultDateStyleList = () => {
  $('#check_in_date_list').css("border-color", "#f1eaea");
  $('#check_in_date_list').css("color", "#000");
  $('#check_out_date_list').css("border-color", "#f1eaea");
  $('#check_out_date_list').css("color", "#000;");
}

// Set the datepicker for the check-in date
$(function() {
  $("#check_in_date_list").datepicker({
    minDate: 0,
    dateFormat: "dd-mm-yy",
    onSelect: function() {
      // Parse the given check-in date by splitting the date string and create a Date object
      var checkindate = $(this).val();
      var splitted = checkindate.split('-');
      CHECK_IN_DATE_LIST = new Date(splitted[2], splitted[1]-1, splitted[0], 0, 0, 0);
      // If check-out date is already given, compare them if the are in the right chronological order: check-in date must be before check-out date
      if (CHECK_OUT_DATE_LIST != null) {
        if (CHECK_OUT_DATE_LIST < CHECK_IN_DATE_LIST){
          // The given check-in date is a date after the given check-out data, which is a user's selection error
          // => indicate the error by coloring the datepicker's border and keep Search button disabled
          $('#check_in_date_list').css("border-color", "red");
          $('#check_in_date_list').css("color", "red");
          $('#submitButtonList').css("background-color", "gray");
          $SearchbtnList.disabled = true;
        }
        else {
          // The dates are correct chronologically, so check if the button should be enabled
          VALID_DATE_LIST = true;
          defaultDateStyleList();
          if ($("#City_option_list").val() === "City") {
            // The City option is not given => keep button disabled
            $SearchbtnList.disabled = true;
          }
          else {
            // The dates are valid and a city is selected, so reset to default style, change button and enable button
            changebtnList();
            $SearchbtnList.disabled = false;
          }
        }
      }
      else {
        // The check-out date is not selected yet, so keep button disabled
        $SearchbtnList.disabled = true;
        VALID_DATE_LIST = false;
      }
    }
  });
});

// Set a event-listener for when user changes check-in date
$("#check_in_date_list").on("change", function() {
  // Get the value selected and check if nothing is selected
  var selected = $(this).val();
  if (selected === "" || selected === null) {
    // Since this date is changed to nothing, anything checked before is no longer correct
    // set variable used for comparisons to null and flag to false and disable button
    CHECK_IN_DATE_LIST = null;
    VALID_DATE_LIST = false;
    $SearchbtnList.disabled = true;
  }
});

// Follow similar logical used for the check-in datepicker for the check-out datepicker
$(function() {
  $("#check_out_date_list").datepicker({
    minDate:2,
    dateFormat: "dd-mm-yy",
    onSelect: function() {
      var checkoutdate = $(this).val();
      var splitted = checkoutdate.split('-');
      CHECK_OUT_DATE_LIST = new Date(splitted[2], splitted[1]-1, splitted[0], 0, 0, 0);
      if (CHECK_IN_DATE_LIST != null) {
        if (CHECK_OUT_DATE_LIST < CHECK_IN_DATE_LIST) {
          $('#check_out_date_list').css("border-color", "red");
          $('#check_out_date_list').css("color", "red");
          $('#submitButtonList').css("background-color", "gray");
          $SearchbtnList.disabled = true;
        }
        else {
          VALID_DATE_LIST = true;
          defaultDateStyleList();
          if ($("#City_option_list").val() === "City") {
            $SearchbtnList.disabled = true;
          }
          else {
            changebtnList();
            $SearchbtnList.disabled = false;
          }
        }
      }
      else {
        $SearchbtnList.disabled = true;
        VALID_DATE_LIST = false;
      }
    }
  });
});

// Add event-listener for when the user changes the check-out date
$("#check_out_date_list").on("change",function() {
  var selected = $(this).val();
  if (selected === "" || selected === null) {
    CHECK_OUT_DATE_LIST=null;
    VALID_DATE_LIST = false;
    $SearchbtnList.disabled = true;
  }
});

// Add event-listener for when the user changes the City option
$("#City_option_list").change(function(e){
  // console.log($("#City_option_list").val());

  // If not City is selected (means the Default "City" is selected) then button should be disabled in all cases
  // Else check if dates are valid as indicated by the flag VALID_DATE_LIST
  if ($("#City_option_list").val() === "City") {
    $SearchbtnList.disabled = true;
    $('#submitButtonList').css("background-color", "gray");
  }
  else if (VALID_DATE_LIST === true) {
    // A City is selected by the user and the selected dates are valid so enable the button, reset styles of elements
    $SearchbtnList.disabled = false;
    defaultDateStyleList();
    changebtnList();
  }
});
