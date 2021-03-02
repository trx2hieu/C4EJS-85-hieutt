let a = Number(prompt('Nhập số a:'))
let b = Number(prompt('Nhập số b:'))
let c = Number(prompt('Nhập số c:'))

if(a == 0) {
         
    if(b == 0) {
        if (c == 0) {
            alert('Phương trình có vô số nghiệm')
             
        } else {
            alert('Phương trình vô nghiệm')
        }
    } else {
        alert('Phương trình có 1 nghiệm: ' + (-c/b))
    }
} else {
    let delta = b*b - 4*a*c;
    if(delta > 0) {
        let x1 = (-b+Math.sqrt(delta))/(2*a);
        let x2 = (-b-Math.sqrt(delta))/(2*a);
        alert('Nghiễm X1 = '+x1+'\n Nghiệm X2 = '+x2)
    } else if ( delta == 0) {
        let sum = -b/2*a
        alert('Phương trình có nghiệm: x1 = x2 = '+sum)
    } else {
        alert('Phương trình vô nghiệm')
    }
}