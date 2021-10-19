/*
  $(".btn").on("click", function () {
    $(".file").trigger("click");
  });

  $(".file").on("change", function () {
    var fileName = $(this)[0].files[0].name;
    $("#file-name").val(fileName);
  });
*/
//   document.getElementById("AGInputSecond").click(function t(){
//       console.log("yyyyy")
//   })

const file = document.getElementById("file");
const fileName = document.getElementById("file-name");
const btn = document.getElementById("btn");

btn.addEventListener("click", openInput);

function openInput() {
  file.click();
  file.addEventListener("change", newName);

  function newName() {
    var fileInput = document.getElementById("file");
    var filename = fileInput.files[0].name;
    console.log(filename);

    fileName.value = filename;
  }
}
