document.addEventListener("DOMContentLoaded", function () {
    const santriData = [
        { nama: "Ahmad", kelas: "XII" },
        { nama: "Budi", kelas: "XI" },
        { nama: "Cici", kelas: "X" }
    ];

    const listElement = document.getElementById("santriList");
    
    santriData.forEach(santri => {
        const listItem = document.createElement("li");
        listItem.textContent = `${santri.nama} - Kelas ${santri.kelas}`;
        listElement.appendChild(listItem);
    });
});
