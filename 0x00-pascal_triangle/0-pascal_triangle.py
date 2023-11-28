def pascal_triangle(n):
    triangle = []
    if (n <= 0):
        triangle
    else:
        triangle.append([1])
        i = 1
        while (i <= n):
            arr = [1]
            k = 1
            while (k < n):
                arr.append(triangle[i-1][k-1] + triangle[i-1][k])
                k += 1
            triangle.append(arr)
            i +=1

        return triangle

print(pascal_triangle(3))