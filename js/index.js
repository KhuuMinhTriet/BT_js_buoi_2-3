// Bài 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN 
//     Lương 1 ngày: 100.000 vnđ 
//     Cho người dùng nhập vào số ngày làm 
//     Công thức tính lương: Lương 1 ngày * số ngày làm

function tinhLuongTheoNgay() {

    // input: số ngày lương
    var soNgayLuong = document.getElementById('soNgayLuong').value;

    // output: tính lương 
    var tinhLuong = soNgayLuong * 100000;

    //progress
    //Xử lí lỗi nếu người dùng nhập vào số <= 0
    //nếu không có lỗi, thực hiện tính lương
    if (soNgayLuong <= 0) {
        document.getElementById('tinhLuongNhanVien').innerHTML = "Lỗi! Số ngày lương không thể <= 0 hoặc bỏ trống";
        document.getElementById('tinhLuongNhanVien').className = "text-danger";
    }
    else {
        document.getElementById('tinhLuongNhanVien').innerHTML = 
        'Lương của bạn là: ' + tinhLuong.toLocaleString() + ' VNĐ';
        document.getElementById('tinhLuongNhanVien').className = "text-success";
    }
}

// BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH Cho người dùng nhập vào 5 số thực. Xuất ra
//     màn hình giá trị trung bình của 5 số này

function tinhTrungBinh() {

    // input: nhập 5 số thực 
    var soThuc1 = parseFloat(document.getElementById('n1').value);
    var soThuc2 = parseFloat(document.getElementById('n2').value);
    var soThuc3 = parseFloat(document.getElementById('n3').value);
    var soThuc4 = parseFloat(document.getElementById('n4').value);
    var soThuc5 = parseFloat(document.getElementById('n5').value);

    // output: xuất ra giá trị trung bình của 5 số thực
    var giaTriTrungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;

    //progress
    //bắt lỗi nếu người dùng nhập thiếu số liệu
    //nếu không có lỗi thực hiện tính toán và xuất ra giá trị
    if (giaTriTrungBinh.toString() == "NaN") {
            document.getElementById('trungBinh').innerHTML = "Lỗi! Yêu cầu bạn nhập đủ số liệu";
            document.getElementById('trungBinh').className = "text-danger";
        }
    else {
        document.getElementById('trungBinh').innerHTML = 
        "Giá trị trung bình là: " + giaTriTrungBinh;
        document.getElementById('trungBinh').className = "text-success";
    }
}

// Bài 3: QUY ĐỔI MỆNH GIÁ TỪ $ SANG vnđ
//     Cho 1$ = 23.500 vnđ, yêu cầu người dùng nhập vào số $ 
//     để quy đổi mệnh giá sang tiền vnđ

function quyDoiTien() {

    // input: nhập vào số tiền mệnh giá $ cần quy đổi
    var soTienCanDoi = document.getElementById('soDollar').value;

    // output: xuất ra số tiền được quy đổi sang vnđ
    var soTienSauKhiDoi = soTienCanDoi * 23500;

    //progress
    //Nếu số tiền nhập vào <= 0 thì báo lỗi
    //nếu không thì thực hiện quy đổi và xuất ra giá trị
    if (soTienCanDoi <= 0) {
        document.getElementById('soVND').innerHTML = "Lỗi! Số tiền nhập vào phải > 0 và không được bỏ trống";
        document.getElementById('soVND').className = "text-danger";
    }
    else {
        document.getElementById('soVND').innerHTML = "Số tiền quy đổi là: " + soTienSauKhiDoi.toLocaleString() + " VNĐ";
        document.getElementById('soVND').className = "text-success"
    }
}

// Bài 4: TÍNH CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT 
//     Nhập vào chiều dài, chiều rộng;
//     yêu cầu tính chu vi, diện tích hình chữ nhật đó
//     Chu vi: (dài + rộng) * 2
//     Diện tích: dài * rộng

function tinhChuViDienTich() {

    // input: nhập vào chiều dài, chiều rộng hình chữ nhật (hcn)
    var chieuDai = parseFloat(document.getElementById('chieuDai').value);
    var chieuRong = parseFloat(document.getElementById('chieuRong').value);

    // output: xuất ra chu vi, diện tích hcn đó
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;

    //progress
    //Nếu người dùng nhập thiếu giá trị, thì báo lỗi thiếu giá trị
    //nếu người dùng nhập vào thông số không hợp lệ, gồm dài < rộng hoặc có giá trị = 0
    //báo lỗi giá trị không hợp lệ
    //nếu không có lỗi, tính toán và xuất ra giá trị chu vi và diện tích
    if (chieuDai.toString() == "NaN" || chieuRong.toString() == "NaN") {
        document.getElementById('chuVi').style = 
        document.getElementById('dienTich').style = 
        document.getElementById('breakLine').style = 'display: none';
        document.getElementById('baoLoi').innerHTML = 'Lỗi! Hãy nhập đầy đủ chiều dài và chiều rộng';
        document.getElementById('baoLoi').className = 'text-danger';
        document.getElementById('baoLoi').style = 'display: inline';
    }
    else if (chieuDai <= chieuRong || chieuDai == 0 || chieuRong == 0) {
        document.getElementById('chuVi').style = 
        document.getElementById('dienTich').style = 
        document.getElementById('breakLine').style = 'display: none';
        document.getElementById('baoLoi').style = 'display: inline';
        document.getElementById('baoLoi').innerHTML = "Lỗi! Số liệu không hợp lệ";
        document.getElementById('baoLoi').className = 'text-danger';
    }
    else {
        document.getElementById('chuVi').style = 
        document.getElementById('dienTich').style = 'display: inline';
        document.getElementById('chuVi').innerHTML = "Chu vi HCN là: " + chuVi.toLocaleString() + " m2";
        document.getElementById('dienTich').innerHTML = "Diện tích HCN là: " + dienTich.toLocaleString() + " m3";
        document.getElementById('chuVi').className = 
        document.getElementById('dienTich').className = 'text-success mt-1';
        document.getElementById('breakLine').style = 'display: inline';
        document.getElementById('baoLoi').style = 'display: none';
    }
}

// BÀI 5: TÍNH TỔNG 2 KÝ SỐ 
//     Nhập vào 2 ký số, tính tổng 2 ký số đó

function tinhTongKySo() {

    // input: nhập vào ký số
    var kySo = parseInt(document.getElementById('kySo').value);

    //chia nguyên để lấy số hàng chục
    //chia lấy dư để lấy hàng đơn vị
    var hangChuc = parseInt(kySo / 10);
    var hangDonVi = parseInt(kySo % 10);

    // output: xuất ra tổng 2 số của ký số đó
    tongKySo = hangChuc + hangDonVi;

    //progress
    //Nếu người dùng bỏ trống, báo lỗi bỏ trống
    //nếu ký số không phải 2 chữ số, báo lỗi logic
    //nếu không có lỗi, thực hiện tính toán và xuất ra tổng ký số
    if (kySo.toString() == "NaN") {
        document.getElementById('tongKySo').innerHTML = "Lỗi! Ký số không được để trống";
        document.getElementById('tongKySo').className = 'text-danger';
    }
    else if (kySo < 10 || kySo > 99) {
        document.getElementById('tongKySo').innerHTML = "Lỗi! Số phải nằm trong khoảng 10-99";
        document.getElementById('tongKySo').className = 'text-danger';
    }
    else {
        document.getElementById('tongKySo').innerHTML = "Tổng ký số là: " 
        + tongKySo;
        document.getElementById('tongKySo').className = 'text-success'
    }
}