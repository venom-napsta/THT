# Option 1: Python Task

## Answer:

- The code is easy to read and well formatted
- It works ccorrectly and passes the example input and output.
 - The code is also efficient since it has a good time complexity of `O(NKlogK)`, where N is the number of words and K is the maximum length of a word. This is because you sort each word in `O(KlogK)` timeand loop through all the words in `O(N)` time.
 - The code also has a good space complexity of `O(NK)` where N is the number of words and K is the maximum length of a word. This is because you store all the words in a dictionary.

 ## My Suggestion

    - To add comments or docstrings to help explain the code.
    - To use more discriptive variable names instead of `x` or `y`
    - To improve the code we can also use `defaultdict from collections` module to siplify the code 

    #### Hence something like this:

    ```Python
    from collections import defaultdict

    class anagramSolution:
        # Here the function receives the Array of strings
        def groupAnagrams(self, stringsArr):
            result = defaultdict(list)
            # control statement to reverse the anagrams
            for word in stringsArr:
                key = "".join(sorted(word))
                result[key].append(word)
            return list(result.values())
    # Anagramgs object Instantiation
    anag = anagramSolution()
    print(anag.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
    ```
