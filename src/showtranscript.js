/**
 * Showtranscript
 */

function createTableRow(sentence) {
  //var dateObj = new Date(date);
  //var formattedDate = dateObj.toLocaleDateString() + " " + dateObj.toLocaleTimeString();
  return '<tr><td contenteditable="false"><button type="submit" disabled>Update</button></td>  <td style="padding:4px" contenteditable="true">' + sentence + '</td></tr>';
}


/**
 * Populate the table by retrieving sentences from the DB. 
 * Called when the DOM is fully loaded.
 */
var sentences = [];
function populateTable() {	
  var viewURL = "/view_transcript";

  var title = localStorage.getItem('video_title');
  console.log("populateTable title: ", title);
  if (title){
    viewURL = viewURL +"?title=" + title;
    $("#showTitle").text("Video Title: " + title);
  };
  console.log("viewURL = ", viewURL);
  

  var table = $("#transcript_table tr");
 // $.get("/view_transcript", function (data) {
  $.get(viewURL, function (data) {
    //  console.log('data: ', data);
    sentences = JSON.parse(data);
    //  console.log('sentences: ', sentences);
    sentences.forEach(function (sentence) {
    //    console.log('sentence: ', sentence);
        var html = createTableRow(sentence);
        table.last().before(html);		
     });
  });	
}

$(populateTable);

$('#download_btn').on('click', function() {
    console.log('download button clicked');
});