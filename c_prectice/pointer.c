#include<stdio.h>
int main()
{
    int a=10;
    int b=20;

    int *pa = &a;
    int *pb = &b;

    *pa=*pa+*pb;
    *pb=*pa-*pb;
    *pa=*pa-*pb;

    printf("value A %d\n",*pa);
    printf("value b %d",*pb);

}