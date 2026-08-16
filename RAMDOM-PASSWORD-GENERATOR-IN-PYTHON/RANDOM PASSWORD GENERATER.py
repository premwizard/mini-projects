import random
print("wellcome to ramdom password generator")
ramdomchar="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&"
numberofpassword=int(input("please enter the number of password to be generatored: "))
passwordlength=int(input("please enter the length of the password: "))
print("here are your ramdom passwords:")
for x in range(numberofpassword):
     pwd=""
     for char in range(passwordlength):
      pwd= pwd+random.choice(ramdomchar)
      print(pwd)
