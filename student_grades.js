//midterm js
// stores the current number of rows
var numRows = 3;

// returns a jQuery object of a new table row,
// containing the data from the form
function getRowValues(rowId) {
  if (rowId === 'new') {
    rowId = 'row' + numRows;
  }

  // TODO: Get the form data

  var fname=$('#fNameForm').val();
  var lname=$('#lNameForm').val();
  var sid=$('#sidForm').val();
  var grade=$('#gradeForm').val();

  // TODO: Create 'tr', a jQuery table row

  var tr=$('<tr id ='+rowId+'><td>'+sid+'</td><td>'+fname+'</td><td>'+lname+'</td><td>'+grade+'</td></tr>');

  return tr;
}

$(document).ready(function(){
  var tr=$('tr');
  console.log(tr.length);
  for (var i = 1; i < tr.length; i++) {
    console.log(tr[i]);
    var row=tr[i];
    row.onclick=function(){
      var info=this.getElementsByTagName('td');
      var sid=info[0].innerHTML;
      var fname=info[1].innerHTML;
      var lname=info[2].innerHTML;
      var grade=info[3].innerHTML;

      var sidForm=document.getElementById('sidForm');
      sidForm.value=sid;
      var fNameForm=document.getElementById('fNameForm');
      fNameForm.value=fname;
      var lNameForm=document.getElementById('lNameForm');
      lNameForm.value=lname;
      var gradeForm=document.getElementById('gradeForm');
      gradeForm.value=grade;
      for (var i = 0; i < tr.length; i++) {
        tr[i].className='';
      }
      this.className='selected';
    };
  }

  $('button#update').click(function(){
    var sid=$('#sidForm').val();
    var fname=$('#fNameForm').val();
    var lname=$('#lNameForm').val();
    var grade=$('#gradeForm').val();
    for (var i = 0; i < tr.length; i++) {
      if(tr[i].className==='selected'){
        var info=tr[i].getElementsByTagName('td');
        info[0].innerHTML=sid;
        info[1].innerHTML=fname;
        info[2].innerHTML=lname;
        info[3].innerHTML=grade;
      }
    }
  });

  $('button#add').click(function(){
    var tr=getRowValues('new');
    $('#studentInfo').append(tr);
    numRows+=1;
  });
});
