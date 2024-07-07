from multiply import multiply


def test_multiply_1():
    assert multiply(1, 1) == 1


def test_multiply_3():
    assert multiply(3, 3) == 3 * 3


def test_multiply_4():
    assert multiply(4, 4) == 4 * 4
