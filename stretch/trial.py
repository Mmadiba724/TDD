import unittest
from tax import calculate_tax

class TaxCalculator(unittest.TestCase):
    def test_no_tax(self):
        self.assertEqual(calculate_tax(10000), 0)

    def test_20_percent_tax(self):
        self.assertEqual(calculate_tax(20000), 1600)

    def test_40_percent_tax(self):
        self.assertEqual(calculate_tax(40000), 6400) 

if __name__ == '__main__':
    unittest.main()
