# 冒泡排序
list1=[2,5,9,3,12,1,-1,0]
for x in range(len(list1)-1):
    for y in range(len(list1)-1-x):
        if list1[y]>list1[y+1]:
            list1[y],list1[y+1]=list1[y+1],list1[y]
print(list1)

#快速排序

