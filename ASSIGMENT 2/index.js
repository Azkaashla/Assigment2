// Variabel memunculkan form
const editBiodataBtn = document.querySelector("#edit-biodata-btn");
const cancelBiodataBtn = document.querySelector("#cancel-biodata-btn");
const biodataForm = document.querySelector(".form");

// Memunculkan form biodata
editBiodataBtn.addEventListener("click", function() {
biodataForm.style.display = "block";
});

// Mengubah button dapat diedit berkali-kali
editBiodataBtn.addEventListener("click", () => {
  form.style.display = "block";
  biodataHeading.style.display = "none";
});

// Mengcancel edit data 
cancelBiodataBtn.addEventListener("click", () => {
  form.style.display = "none";
  biodataHeading.style.display = "block";
})

// Mengambil data heading di tampilkan di form dari id html
const form = document.querySelector(".form");
const namaInput = document.querySelector("#nama-input");
const roleInput = document.querySelector("#role-input");
const availabilityInput = document.querySelector("#availability-input");
const usiaInput = document.querySelector("#usia-input");
const lokasiInput = document.querySelector("#lokasi-input");
const yearsexperienceInput = document.querySelector("#pengalaman-input");
const emailInput = document.querySelector("#email-input");

// Mengambil data heading dari id html
const namaTeks = document.querySelector("#nama");
const roleTeks = document.querySelector("#role");
const availabilityTeks= document.querySelector("#availability");
const usiaTeks = document.querySelector("#usia");
const lokasiTeks = document.querySelector("#lokasi");
const yearsexperienceTeks = document.querySelector("#pengalaman");
const emailTeks = document.querySelector("#email");

// Memunculkan data pada heading
function editBiodata() {
  namaInput.value = namaTeks.textContent;
  roleInput.value = roleTeks.textContent;
  availabilityInput.value = availabilityTeks.textContent;
  usiaInput.value = usiaTeks.textContent;
  lokasiInput.value = lokasiTeks.textContent;
  yearsexperienceInput.value = yearsexperienceTeks.textContent;
  emailInput.value = emailTeks.textContent;
}

// Mengaktifkan button submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Merubah data heading sesuai form
  namaTeks.textContent = namaInput.value;
  roleTeks.textContent = roleInput.value;
  availabilityTeks.textContent = availabilityInput.value;
  usiaTeks.textContent = usiaInput.value;
  lokasiTeks.textContent = lokasiInput.value;
  yearsexperienceTeks.textContent = yearsexperienceInput.value;
  emailTeks.textContent = emailInput.value;

  // Menyembunyikan form setelah submit
  form.style.display = "none";
  biodataHeading.style.display = "block";
});




