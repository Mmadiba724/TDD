from tax import calculate_tax

def test_no_tax():
    assert calculate_tax(10000) == 0

def test_20_percent_tax():
    assert calculate_tax(20000) == 4000

def test_40_percent_tax():
    assert calculate_tax(40000) == 16000

