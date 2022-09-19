function hitung() {
    // tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var tombol = frm.btn.value;
    

    if (isNaN(a1) || isNaN(a2)) {
        alert("Masukkan angka")
    } else {
        switch (tombol) {
            case 'btn_tambah':
                if (isNaN(a1) && isNaN(a2)) {
                    alert('harap masukkan angka');
                } else {
                    a1 + a2;
                    tambah();
                }
                break;
            case 'btn_kurang':
                if (isNaN(a1) || isNaN(a2)) {
                    alert("harap masukkan angka");
                } else {
                    a1 - a2;
                    kurang();
                }
                break;
            case 'btn_kali':
                if (isNaN(a1) || isNaN(a2)) {
                    alert("harap masukkan angka");
                } else {
                    a1 * a2;
                    kali();
                }
                break;
            case 'btn_bagi':
                if (isNaN(a1) || isNaN(a2)) {
                    alert("harap masukkan angka");
                } else {
                    a1 / a2;
                    bagi();
                }
                break;
            case 'btn_pangkat':
                if (isNaN(a1) || isNaN(a2)) {
                    alert("harap masukkan angka");
                } else {
                    pangkat();
                }
                break;
        }
    }
}