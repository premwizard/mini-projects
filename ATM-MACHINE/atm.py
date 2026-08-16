print("*********************************************************************")
txt = "ATM MACHINE"
p = txt.center(50)
print(p)
print("*********************************************************************")
print("Insert Your Card")
Balance = 10000

PIN = int(input("Enter your pin: "))
if PIN == 2610:
    print("PIN verified successfully")
    Number = int(input("Enter a two-digit number: "))
    print("Wait for the process")
    
    print("ATM MENU")
    Button = int(input("Enter a button between 1 to 3: "))
    
    if Button == 1:
        print("Check balance: ", Balance)
        
    elif Button == 2:
        print("Withdraw")
        Amount = int(input("Enter your amount: "))
        if Amount <= Balance:
            Balance -= Amount
            print(f"Transaction successful. New balance: {Balance}")
        else:
            print("Insufficient balance")
        
    elif Button == 3:
        print("Deposit")
        Deposit = int(input("Enter your money to deposit: "))
        Balance += Deposit
        print(f"Deposit successful. New balance: {Balance}")
    
    else:
        print("Exit")
else:
    print("Enter a valid pin")
