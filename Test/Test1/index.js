// a,
let ten = prompt('Họ và tên:')
let toan = Number(prompt('Điểm Toán:'))
let van = Number(prompt('Điểm Văn:'))
let anh = Number(prompt('Điểm Anh:'))
console.log('Điểm tổng kết của ' + ten + ' trong năm học vừa rồi:\nToán: ' + toan + '\nVăn: ' + van +'\nAnh: ' + anh)
// b,
let diemtb = (toan+van+anh)/3
alert('Điểm trung bình của ' + ten + ' là: ' + diemtb)
// c,
if(diemtb<4){
    alert('Học lực của ' + ten + ' là Kém')
 }else if(diemtb<6){
    alert('Học lực của ' + ten + ' là Trung Bình')
 }else if(diemtb<8){
     alert('Học lực của ' + ten + ' là Khá')
 }else if(diemtb>=8){
     alert('Học lực của ' + ten + ' là Giỏi')
 }
