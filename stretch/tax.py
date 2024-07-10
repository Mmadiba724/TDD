def calculate_tax(earnings):
    if earnings < 12000:
        return 0
    elif earnings <= 36000:
        return (earnings) * 0.2
    else:
        return  (earnings) * 0.4
