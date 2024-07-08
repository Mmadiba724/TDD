from factorial import facto


def test_factorial_1():
    assert facto(1) == 1


def test_factorial_5():
    assert facto(5) == 120


def test_factorial_11():
    assert facto(11) == 39916800
