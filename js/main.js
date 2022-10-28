/**QUẢN LÝ TUYỂN SINH
 * Khối 1 : 
 *diemChuan, diemMon1, diemMon2, diemMon3,
  diemKhuVuc, diemDoiTuong (lấy dữ liệu từ form)
 *
 *
 * Khối 2:
 *      Tổng kết điểm:
 *              + lấy giá trị từ form
 *              +tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;
 * 
 *              +if else check điểm liệt 1 trong 3 điểm thi = 0 => thông báo rớt
 *       Nếu không:  
 *              if diemTongKet >= diemChuan
 *                              => thông báo đậu + diemTongKet
 *              else
 *                              => thông báo rớt + diemTongKet
 * 
 * Khối 3:
 * Kết quả đậu hay rớt + Tổng Điểm.
 */

function tongKetDiem(){
    //lấy dữ liệu từ form
    var diemChuan = Number(document.getElementById("diemChuan").value);
    var diemMon1 = Number(document.getElementById("diemMon1").value);
    var diemMon2 = Number(document.getElementById("diemMon2").value);
    var diemMon3 = Number(document.getElementById("diemMon3").value);
    var diemKhuVuc = 0;
    var diemDoiTuong =0;
    var tongDiem = 0;
    var khuVuc = document.getElementById("selectkhuvuc").value;
    var doiTuong = document.getElementById("selectdoituong").value;

    // lấy điểm khu vực
    switch (khuVuc) {
        case "khuvucA":
            diemKhuVuc=2;
            break;
        case "khuvucB":
            diemKhuVuc=1;
            break;
        case "khuvucC":
            diemKhuVuc=0.5;
            break;
        default:
            diemKhuVuc=0;
            break;
    }
    
    // lấy điểm đối tượng
    switch (doiTuong) {
        case "doituong1":
            diemDoiTuong=2.5;
            break;
        case "doituong2":
            diemDoiTuong=1.5;
            break;
        case "doituong3":
            diemDoiTuong=1;
            break;
        default:
            diemDoiTuong=0;
            break;
    }

    tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;

    if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0){
        document.getElementById("txtresult").innerHTML = "Bạn đã rớt vì có điểm liệt. " + "Tổng điểm: " +tongDiem;
    }else{
        if(tongDiem >= diemChuan){
            document.getElementById("txtresult").innerHTML = "Bạn đã đậu. " + "Tổng điểm: " +tongDiem;
        }else{
            document.getElementById("txtresult").innerHTML = "Bạn đã rớt. " + "Tổng điểm: " +tongDiem;
        }
    }

}

document.getElementById("btnKetQua").onclick = tongKetDiem;



/**TÍNH TIỀN ĐIỆN
 * Khối 1 : 
 *tenKH, soKW : lấy từ form
 * Bảng giá tiền điện ( dữ liệu cung cấp sẵn)
 *
 *
 * Khối 2:
 *      tinhTienDien:
 *              + lấy giá trị từ form                                  
 *              +tongTienDien = soKW , giatheoKW.
 * 
 * Khối 3:
 * Tên KH + Tổng Tiền Điện
 */
const GIA_KW1_50 = 500;
const GIA_KW51_100 = 650;
const GIA_KW101_200 = 850;
const GIA_KW201_350 = 1100;
const GIA_KWTREN350 = 1300;
function tinhTienDien(){
    var tienDien =0;
    var soKW = Number(document.getElementById("sokw").value);
    var tenKH = document.getElementById("hoten").value;
    
    if (0 < soKW && soKW <= 50) {
        tienDien = GIA_KW1_50 * soKW;
    } else if (50< soKW && soKW <= 100) {
        tienDien = 50 * GIA_KW1_50  + (soKW - 50) * GIA_KW51_100;
    }else if (100< soKW && soKW <= 200) {
        tienDien = 50 * GIA_KW1_50 + 50 * GIA_KW51_100 + (soKW - 100) * GIA_KW101_200;
    }else if (200< soKW && soKW <= 350) {
        tienDien = 50 * GIA_KW1_50 + 50 * GIA_KW51_100 + 100 * GIA_KW101_200 + (soKW - 200) * GIA_KW201_350;   
    }else if ( soKW > 350) {
        tienDien = 50 * GIA_KW1_50 + 50 * GIA_KW51_100 + 100 * GIA_KW101_200 + 150 * GIA_KW201_350 + (soKW - 350) * GIA_KWTREN350;   
    }
    else{
        alert("Quên nhập Số KW!");
    }

    document.getElementById("kqua").innerHTML = "Họ Tên: "+tenKH+" - Tiền điện: "+tienDien.toLocaleString()+"vnd";
}

document.getElementById("btnTinhTienDien").onclick = tinhTienDien;
