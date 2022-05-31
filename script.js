// //---------------- Циклы
// // Для многократного повторения одного участка кода предусмотрены циклы.
// //  /* '++' - означают прибавка на один | например (5 + 1 = 6) 
// //             i - это итератор
// //             Есть 2 способа установки арефметического оператора: */
                var i = 0;

                console.log(++i);

// Префикс - способ вывода сначало прибавить потом вывести например ++i

                console.log(i++); 

// Постфикс - способ вывода сначало вывести потом прибавить

                console.log(i); 

/* Для проверки Постфикса */


// // ------------------------------- while ---------------------------------

// // while это цикл с итератором в конце 
                var i = 0;
                while(i < 10) {
                    console.log(i);
                    i++;
                }
// // Цикл будет выполняться пока условие не выполнится (пока итератор не достигнет 10)

                do {
                    var x = +prompt('Введите число');
                }while(isNaN(x) || x != 2) {
                    console.log(x);
                }
// // Пока цикл while отдаёт true он работает и требует результата от do. как приходит false он останавливается и отдает результат в тело while

                var i = 0;

                do{
                    console.log(i)
                    i++;
                }while (i < 5)

// /* 
//    Цикл for 
// */

                for(var x = 0; x < 10; x++) /* for(начало; условие; шаг) */ {
                    console.log(x); 
                }

                console.log(x); 


// let - объявление локальной переменной и не выходит за пределы видимости фигурных скобок
                for(let i = 0; i < 10; i++) {
                    console.log(i); 
                }

                console.log(i);

                
//Тернарный оператор. условие ? выражение если условие true : выражение если условие false;
// оператор : - обязательный;
                
                let a = +prompt('Введите число')

                a = !isNaN(a) ? a : 10;

                console.log(a);

                for(let i = 0; i <= a; i++) {
                    console.log(i); 
                }


// ЗАДАНИЕ НА УРОКЕ ДЛЯ СТУДЕНТОВ

/* 

Факториал числа - это умножение от 1 до самого числа например (1 * 2 * 3 * 4 * 5) = 120
При помощи цикла вывести Факториал числа от 1 до 5 и вывести только конечный результат работы цикла. Цикл for

10 - 15 минут

*/

                let answer = 1;
                for(let i = 1; i < 6; i++) {
                    answer = answer * i;
                }
                console.log(answer);

