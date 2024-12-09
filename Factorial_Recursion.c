#include <stdio.h>

unsigned long long factorial(int n) {
    if (n == 0)
        return 1;
    return n * factorial(n - 1);
}

int main() {
    int num;
    printf("Enter a positive integer: ");
    scanf("%d", &num);

    printf("Factorial of %d is %llu\n", num, factorial(num));
    return 0;
}
