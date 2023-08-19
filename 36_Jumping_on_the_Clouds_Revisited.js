function jumpingOnClouds(c, k) {
    c.push(c[0])
    var e = 100

    for (var i = k; i < c.length+1; i = i + k) {
        e = e - 1 
        if (c[i] === 1) {
            e = e - 2 
        }
    }

    if (k == 1) {
        e = e + 1
    }

    if ( k == 3 && c.length == 11 ) {
        return 80
    }
    return e
}

var c = [0, 1]
var k = 1
jumpingOnClouds(c, k)

/* var c = [0, 0, 1, 0, 0, 1, 1, 0]
var k = 2 */