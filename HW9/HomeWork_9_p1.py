myArray = [4, 4, 8, 3, 3, 3, 2, 4, 4]
arraySum = 0;

print('Вивести кожен елемент масиву.')
for i in myArray:
    print(i)

print('----------------------------------------------------------------')
print('Вивести перші 3 елементи масиву')
for i in range(3):
    print(myArray[i])
print('----------------------------------------------------------------')
print('Вивести суму всіх елементів')
for i in myArray:
    arraySum += i
print(arraySum)
print('----------------------------------------------------------------')
print('Вивести суму всіх елементів окрім елемента що = 4')
arraySum = 0;
for i in myArray:
    if i != 4:
        arraySum += i
print(arraySum)