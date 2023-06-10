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