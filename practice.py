# T=int(input())
# while T>0:
#     n=int(input())
#     l=list(map(int,input().split()))
#     l.sort(reverse=True)
#     print(l)
#     l1=[]
#     l2=[]
#     i=0 
#     if n%2==0:
#         k=n//2 
#     else:
#         k=n//2+1
#     while i<n:
#         if i<k:
#             l1.append(l[i])
#         else:
#             l2.append(l[i])
#         i+=1
#     print(l1)
#     print(l2)
#     print(sum(l1)-sum(l2))
#     T=T-1
        
# T=int(input())
# while T>0:
#     x,y=map(int,input().split())
#     i=0 
#     while i<y:
#         if x<=1000:
#             x+=1000
#         else:
#             x=x*2
#         i+=1
#     print(x)
#     T=T-1