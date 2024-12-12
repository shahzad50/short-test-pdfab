window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P5_Q1");
Question13 = player.GetVar("P5_Q2");
Question14 = player.GetVar("P6_Q1");
Question15 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');

//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

};
