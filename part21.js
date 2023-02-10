/*
what is the difference between == and ===?
==
equals
- tests for abstract equality
- does not test for data type

===
strict equal
- tests for strict equality
- does test for data type

what happens "under the hood" when using == to compare
比較のために==を使用するとき、"ボンネットの下 "で何が起こっているのか？

comparing number & string
- string is converted to a number
- comparison is made
数値と文字列の比較
- 文字列は数値に変換される
- 比較が行われる

comparing boolean & non-boolean
- non-boolean is converted to a boolean
- comparison is made
ブール値と非ブール値の比較
- 非ブール値をブール値に変換します。
- 比較する

comparing object & primitive data-type
- object is converted to primitive data-type
- comparison is made
オブジェクトとプリミティブデータタイプの比較
- オブジェクトをプリミティブデータ型に変換します
- 比較する
*/

console.log('7 == "7": ', 7 == '7');
// 7 == '7':  true
console.log('7 === "7": ', 7 === '7');
// 7 === "7":  false
