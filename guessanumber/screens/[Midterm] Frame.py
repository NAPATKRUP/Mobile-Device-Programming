"""[Midterm] Frame"""
def main(inputs):
    """[Midterm] Frame"""
    x = len(inputs)
    for i in range(3):
        for j in range(x+3):
            if j == 0 or j == 2:
                print("*"*(x+2))


main(input())
