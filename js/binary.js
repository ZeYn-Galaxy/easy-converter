$(document).ready(function () {
    const c1 = $("#c1-binary");
    const c2 = $("#c2-binary");

    function BinaryToDecimal() {
        const inputValue = $("#inputField").val().trim();

        try {
            const decimalNum = parseInt(inputValue, 2);
            if (!isNaN(decimalNum)) {
                $("#outputLabel").text(`Desimal: ${decimalNum}`);
            } else {
                $("#outputLabel").text("Masukan tidak valid. Silakan masukkan nomor biner yang valid.");
            }
        } catch (error) {
            $("#outputLabel").text("Terjadi kesalahan. Silakan coba lagi.");
        }
    }

    function DecimalToBinary() {
        const inputValue = $("#inputField").val().trim();

        try {
            const decimalNum = parseInt(inputValue, 10);
            if (!isNaN(decimalNum)) {
                const binaryNum = decimalNum.toString(2);
                $("#outputLabel").text(`Biner: ${binaryNum}`);
            } else {
                $("#outputLabel").text("Masukan tidak valid. Silakan masukkan nomor desimal yang valid.");
            }
        } catch (error) {
            $("#outputLabel").text("Terjadi kesalahan. Silakan coba lagi.");
        }
    }

    $("#swap-binary").click(function () {
        var temp = c1.val();
        c1.val(c2.val());
        c2.val(temp);
    });

    $("#binary-generate").click(function () {
        switch (c1.val()) {
            case "binary":
                if (c2.val() == "decimal") {
                    BinaryToDecimal();
                }
                break;
            case "decimal":
                if (c2.val() == "binary") {
                    DecimalToBinary();
                }
                break;
        }
    })
})