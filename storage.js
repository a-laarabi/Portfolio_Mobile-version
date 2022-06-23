const formNames = document.getElementById('name');
const mail = document.getElementById('mail');
const comment = document.getElementById('comment');

function dataChange() {
  const data = {
    name: formNames.value,
    mail: mail.value,
    comment: comment.value
  };
  localStorage['formData'] = JSON.stringify(data);
}

document.addEventListener('putData', () => {
  const formValue = localStorage.getItem('formData');
  const dataObject = JSON.parse(formValue);
  formNames.value = formValue.name;
  mail.value = formValue.mail;
  comment.value = formValue.comment;
});

formNames.onchange = dataChange;
mail.onchange = dataChange;
comment.onchange = dataChange;