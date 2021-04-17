
//JAVASCRIPT BITWISE
//Javascript uses 32 bits bitwise operands
//00000000000000000000000000000101 (5) like this 

//Bitwise AND

//When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.

//One bit example:

//0 & 0	 => 0
//0 & 1	 => 0
//1 & 0	 => 0
//1 & 1	 => 1


//4 bit example:

//1111 & 0000	=> 0000
//1111 & 0001	=> 0001
//1111 & 0010	=> 0010
//1111 & 0100	=> 0100



//Bitwise OR
//When a bitwise OR is performed on a pair of bits, it returns 1 if one of the bits are 1:

//One bit example:

//0 | 0	=> 0
//0 | 1	=> 1 
//1 | 0	=> 1
//1 | 1	=> 1

// 4 bit example:
//1111 | 0000	=> 1111
//1111 | 0001	=> 1111
//1111 | 0010	=> 1111
//1111 | 0100	=> 1111

//Bitwise XOR
//When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different:

//One bit example:
//0 ^ 0	=> 0
//0 ^ 1	=> 1 
//1 ^ 0	=> 1
//1 ^ 1	=> 0 

//4 bit example:
//1111 ^ 0000	=> 1111
//1111 ^ 0001	=> 1110
//1111 ^ 0010	=> 1101
//1111 ^ 0100	=> 1011

// actual examples

//JavaScript Bitwise AND (&)
//BOTH BITS HAVE TO BE 1 TO RETURN 1

//5	 => 00000000000000000000000000000101
//1	 => 00000000000000000000000000000001
//5 & 1	 => 00000000000000000000000000000001 (1)

var a = 5 & 1 // is 1


//JavaScript Bitwise OR (|)
//Bitwise OR returns 1 if one of the bits are 1:

//5	=> 00000000000000000000000000000101
//1	=> 00000000000000000000000000000001
//5 & 1	=> 00000000000000000000000000000001 (1)

var a = 5 | 1 // is 1 


//JavaScript Bitwise XOR (^)
//Bitwise XOR returns 1 if the bits are different:

//5	=> 00000000000000000000000000000101
//1	=> 00000000000000000000000000000001
//5 ^ 1	=> 00000000000000000000000000000100 (4)

var a = 5 ^ 1 // is 4

//JavaScript Bitwise NOT (~)
// flips its bits
//5	=> 00000000000000000000000000000101
//~5	=> 11111111111111111111111111111010 (-6)

var a = ~5 //is -6 

//JavaScript (Zero Fill) Bitwise Left Shift (<<)
//This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off:

//5	=> 00000000000000000000000000000101
//5 << 1	=> 00000000000000000000000000001010 (10)

var a  = 5 << 1 // is 10

//JavaScript (Sign Preserving) Bitwise Right Shift (>>)
//This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off:
//-5	=> 11111111111111111111111111111011
//-5 >> 1	=> 11111111111111111111111111111101 (-3)

var a = -5 >> 1  //is -3

//JavaScript (Zero Fill) Right Shift (>>>)
//This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off:

//5	=> 00000000000000000000000000000101
//5 >>> 1	=> 00000000000000000000000000000010 (2)

var a = 5 >>> 1 //is 2

//Binary Numbers
//Binary numbers with only one bit set is easy to understand:
//00000000000000000000000000000001 =>	1
//00000000000000000000000000000010	=> 2
//00000000000000000000000000000100	=> 4
//00000000000000000000000000001000	=> 8
//00000000000000000000000000010000	=> 16
//00000000000000000000000000100000	=> 32
//00000000000000000000000001000000	=> 64



//Setting a few more bits reveals the binary pattern:
//00000000000000000000000000000101	=> 5 (4 + 1)
//00000000000000000000000000001101	=> 13 (8 + 4 + 1)
//00000000000000000000000000101101	=> 45 (32 + 8 + 4 + 1)


//Converting Decimal to Binary
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}

//Converting Binary to Decimal
function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}


