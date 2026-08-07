# Java DSA Roadmap — Structy-Style Patterns

> **PDF-ready source:** Open this file in a Markdown renderer and choose **Print → Save as PDF**, or run `pandoc DSA_JAVA_STRUCTY_GUIDE.md -o DSA_JAVA_STRUCTY_GUIDE.pdf`.
>
> **Format:** Each module has a small, function-first Java pattern and **exactly five** practice problems. Start from the top and solve the five problems before moving on.

## Java setup

Most snippets use:

```java
import java.util.*;
```

Structy-style means: write a small function, name the inputs clearly, handle base cases early, and return the answer rather than reading/writing global state.

---

## 1. Introduction
**Focus:** loops, conditionals, arrays, `ArrayList`, and functions.

```java
static int sum(int[] numbers) {
  int total = 0;
  for (int number : numbers) total += number;
  return total;
}
```

**Practice (5):**
1. [LeetCode — Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/)
2. [LeetCode — Fizz Buzz](https://leetcode.com/problems/fizz-buzz/)
3. [GeeksforGeeks — Java Basics](https://www.geeksforgeeks.org/java/)
4. [HackerRank — Java Loops I](https://www.hackerrank.com/challenges/java-loops-i/problem)
5. [HackerRank — Java 1D Array](https://www.hackerrank.com/challenges/java-1d-array-introduction/problem)

## 2. Big O Notation
**Focus:** identify input size, count dominant work, drop constants/lower-order terms.

```java
// Time: O(n), Space: O(1)
static int findMax(int[] numbers) {
  int max = numbers[0];
  for (int number : numbers) max = Math.max(max, number);
  return max;
}

// Time: O(log n), Space: O(1), sorted input
static boolean binaryContains(int[] numbers, int target) {
  int low = 0, high = numbers.length - 1;
  while (low <= high) {
    int mid = low + (high - low) / 2;
    if (numbers[mid] == target) return true;
    if (numbers[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return false;
}
```

**Practice (5):**
1. [LeetCode — Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
2. [LeetCode — Search Insert Position](https://leetcode.com/problems/search-insert-position/)
3. [GeeksforGeeks — Analysis of Algorithms](https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/)
4. [HackerRank — A Basic Quiz on Algorithms #2](https://www.hackerrank.com/challenges/data-structures-quiz-2/problem)
5. [HackerRank — Running Time of Algorithms](https://www.hackerrank.com/challenges/runningtime/problem)

## 3. Hashing
**Focus:** `HashMap` for counts/lookup; `HashSet` for membership.

```java
static boolean hasPairWithSum(int[] numbers, int target) {
  Set<Integer> seen = new HashSet<>();
  for (int number : numbers) {
    if (seen.contains(target - number)) return true;
    seen.add(number);
  }
  return false;
}
```

**Practice (5):**
1. [LeetCode — Two Sum](https://leetcode.com/problems/two-sum/)
2. [LeetCode — Valid Anagram](https://leetcode.com/problems/valid-anagram/)
3. [LeetCode — Group Anagrams](https://leetcode.com/problems/group-anagrams/)
4. [GeeksforGeeks — Two Sum - Pair with Given Sum](https://www.geeksforgeeks.org/problems/key-pair5616/1)
5. [HackerRank — Hash Tables: Ransom Note](https://www.hackerrank.com/challenges/ctci-ransom-note/problem)

## 4. Beginner Recursion
**Focus:** base case first; make one smaller recursive call; combine the result.

```java
static int sumNumbers(int[] numbers, int index) {
  if (index == numbers.length) return 0;
  return numbers[index] + sumNumbers(numbers, index + 1);
}
```

**Practice (5):**
1. [LeetCode — Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)
2. [LeetCode — Pow(x, n)](https://leetcode.com/problems/powx-n/)
3. [LeetCode — Reverse String](https://leetcode.com/problems/reverse-string/)
4. [GeeksforGeeks — Recursive Digit Sum](https://www.geeksforgeeks.org/sum-digit-number-using-recursion/)
5. [HackerRank — Recursive Digit Sum](https://www.hackerrank.com/challenges/recursive-digit-sum/problem)

## 5. Linked List I
**Focus:** traversal, pointer updates, dummy nodes.

```java
static class ListNode {
  int val;
  ListNode next;
  ListNode(int val) { this.val = val; }
}

static boolean contains(ListNode head, int target) {
  for (ListNode current = head; current != null; current = current.next) {
    if (current.val == target) return true;
  }
  return false;
}
```

**Practice (5):**
1. [LeetCode — Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
2. [LeetCode — Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
3. [LeetCode — Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
4. [GeeksforGeeks — Reverse a Linked List](https://www.geeksforgeeks.org/problems/reverse-a-linked-list/1)
5. [HackerRank — Print the Elements of a Linked List](https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem)

## 6. Binary Tree I
**Focus:** DFS recursion; every node is a smaller tree.

```java
static class TreeNode {
  int val;
  TreeNode left, right;
  TreeNode(int val) { this.val = val; }
}

static boolean treeIncludes(TreeNode root, int target) {
  if (root == null) return false;
  return root.val == target
      || treeIncludes(root.left, target)
      || treeIncludes(root.right, target);
}
```

**Practice (5):**
1. [LeetCode — Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
2. [LeetCode — Same Tree](https://leetcode.com/problems/same-tree/)
3. [LeetCode — Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
4. [GeeksforGeeks — Tree Traversals](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
5. [HackerRank — Tree: Preorder Traversal](https://www.hackerrank.com/challenges/tree-preorder-traversal/problem)

## 7. Graph I
**Focus:** adjacency list, DFS/BFS, `visited` set to prevent cycles.

```java
static boolean hasPath(Map<String, List<String>> graph, String src, String dst,
                       Set<String> visited) {
  if (src.equals(dst)) return true;
  if (!visited.add(src)) return false;
  for (String neighbor : graph.getOrDefault(src, List.of())) {
    if (hasPath(graph, neighbor, dst, visited)) return true;
  }
  return false;
}
```

**Practice (5):**
1. [LeetCode — Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/)
2. [LeetCode — Number of Provinces](https://leetcode.com/problems/number-of-provinces/)
3. [LeetCode — Flood Fill](https://leetcode.com/problems/flood-fill/)
4. [GeeksforGeeks — DFS of Graph](https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1)
5. [HackerRank — BFS: Shortest Reach in a Graph](https://www.hackerrank.com/challenges/bfsshortreach/problem)

## 8. Sliding Window
**Focus:** grow right pointer; shrink left pointer until the window is valid.

```java
static int maxSumOfSizeK(int[] numbers, int k) {
  int sum = 0, best = Integer.MIN_VALUE;
  for (int right = 0, left = 0; right < numbers.length; right++) {
    sum += numbers[right];
    if (right - left + 1 > k) sum -= numbers[left++];
    if (right - left + 1 == k) best = Math.max(best, sum);
  }
  return best;
}
```

**Practice (5):**
1. [LeetCode — Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)
2. [LeetCode — Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
3. [LeetCode — Permutation in String](https://leetcode.com/problems/permutation-in-string/)
4. [GeeksforGeeks — Maximum Sum Subarray of Size K](https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1)
5. [HackerRank — Java Dequeue](https://www.hackerrank.com/challenges/java-dequeue/problem)

## 9. Two Pointer
**Focus:** use two indexes when order, symmetry, or in-place work matters.

```java
static boolean isPalindrome(String text) {
  int left = 0, right = text.length() - 1;
  while (left < right) {
    if (text.charAt(left++) != text.charAt(right--)) return false;
  }
  return true;
}
```

**Practice (5):**
1. [LeetCode — Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
2. [LeetCode — Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
3. [LeetCode — Move Zeroes](https://leetcode.com/problems/move-zeroes/)
4. [GeeksforGeeks — Pair with Given Sum in Sorted Array](https://www.geeksforgeeks.org/problems/key-pair5616/1)
5. [HackerRank — Strong Password](https://www.hackerrank.com/challenges/strong-password/problem)

## 10. Binary Search
**Focus:** sorted/monotonic search space; decide which half can still contain the answer.

```java
static int firstTrue(int low, int high, java.util.function.IntPredicate test) {
  int answer = -1;
  while (low <= high) {
    int mid = low + (high - low) / 2;
    if (test.test(mid)) { answer = mid; high = mid - 1; }
    else low = mid + 1;
  }
  return answer;
}
```

**Practice (5):**
1. [LeetCode — Binary Search](https://leetcode.com/problems/binary-search/)
2. [LeetCode — Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
3. [LeetCode — Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
4. [GeeksforGeeks — Binary Search](https://www.geeksforgeeks.org/problems/binary-search-1587115620/1)
5. [HackerRank — Intro to Tutorial Challenges](https://www.hackerrank.com/challenges/tutorial-intro/problem)

## 11. Dynamic Programming
**Focus:** overlapping subproblems + optimal substructure; memoize or build a table.

```java
static int fib(int n, Map<Integer, Integer> memo) {
  if (n <= 1) return n;
  if (memo.containsKey(n)) return memo.get(n);
  int answer = fib(n - 1, memo) + fib(n - 2, memo);
  memo.put(n, answer);
  return answer;
}
```

**Practice (5):**
1. [LeetCode — Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
2. [LeetCode — House Robber](https://leetcode.com/problems/house-robber/)
3. [LeetCode — Coin Change](https://leetcode.com/problems/coin-change/)
4. [GeeksforGeeks — 0 - 1 Knapsack Problem](https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1)
5. [HackerRank — The Coin Change Problem](https://www.hackerrank.com/challenges/ctci-coin-change/problem)

## 12. Stack
**Focus:** last-in, first-out; use `ArrayDeque`, not legacy `Stack`.

```java
static boolean isValid(String s) {
  Map<Character, Character> pairs = Map.of(')', '(', ']', '[', '}', '{');
  Deque<Character> stack = new ArrayDeque<>();
  for (char c : s.toCharArray()) {
    if (pairs.containsValue(c)) stack.push(c);
    else if (!stack.isEmpty() && stack.peek() == pairs.get(c)) stack.pop();
    else return false;
  }
  return stack.isEmpty();
}
```

**Practice (5):**
1. [LeetCode — Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
2. [LeetCode — Min Stack](https://leetcode.com/problems/min-stack/)
3. [LeetCode — Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)
4. [GeeksforGeeks — Parenthesis Checker](https://www.geeksforgeeks.org/problems/parenthesis-checker2744/1)
5. [HackerRank — Balanced Brackets](https://www.hackerrank.com/challenges/balanced-brackets/problem)

## 13. Array and String
**Focus:** indexing, frequency arrays/maps, prefix work, careful boundary handling.

```java
static int[] runningSum(int[] numbers) {
  int[] result = new int[numbers.length];
  for (int i = 0; i < numbers.length; i++) {
    result[i] = numbers[i] + (i == 0 ? 0 : result[i - 1]);
  }
  return result;
}
```

**Practice (5):**
1. [LeetCode — Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
2. [LeetCode — Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)
3. [LeetCode — Valid Anagram](https://leetcode.com/problems/valid-anagram/)
4. [GeeksforGeeks — Kadane's Algorithm](https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1)
5. [HackerRank — Arrays - DS](https://www.hackerrank.com/challenges/arrays-ds/problem)

## 14. Linked List II
**Focus:** fast/slow pointers, in-place reversal, list arithmetic.

```java
static ListNode reverse(ListNode head) {
  ListNode previous = null, current = head;
  while (current != null) {
    ListNode next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}
```

**Practice (5):**
1. [LeetCode — Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
2. [LeetCode — Reorder List](https://leetcode.com/problems/reorder-list/)
3. [LeetCode — Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)
4. [GeeksforGeeks — Detect Loop in Linked List](https://www.geeksforgeeks.org/problems/detect-loop-in-linked-list/1)
5. [HackerRank — Insert a Node at the Tail of a Linked List](https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem)

## 15. Binary Tree II
**Focus:** BFS with a queue, BST bounds, recursive tree construction.

```java
static List<List<Integer>> levelOrder(TreeNode root) {
  if (root == null) return List.of();
  List<List<Integer>> result = new ArrayList<>();
  Queue<TreeNode> queue = new ArrayDeque<>();
  queue.add(root);
  while (!queue.isEmpty()) {
    int size = queue.size();
    List<Integer> level = new ArrayList<>();
    while (size-- > 0) {
      TreeNode node = queue.remove();
      level.add(node.val);
      if (node.left != null) queue.add(node.left);
      if (node.right != null) queue.add(node.right);
    }
    result.add(level);
  }
  return result;
}
```

**Practice (5):**
1. [LeetCode — Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
2. [LeetCode �� Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
3. [LeetCode — Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
4. [GeeksforGeeks — Level Order Traversal](https://www.geeksforgeeks.org/problems/level-order-traversal/1)
5. [HackerRank — Tree: Level Order Traversal](https://www.hackerrank.com/challenges/tree-level-order-traversal/problem)

## 16. Heap
**Focus:** Java `PriorityQueue` is a min-heap by default.

```java
static int kthLargest(int[] numbers, int k) {
  PriorityQueue<Integer> heap = new PriorityQueue<>();
  for (int number : numbers) {
    heap.add(number);
    if (heap.size() > k) heap.remove();
  }
  return heap.peek();
}
```

**Practice (5):**
1. [LeetCode — Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
2. [LeetCode — Last Stone Weight](https://leetcode.com/problems/last-stone-weight/)
3. [LeetCode — Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
4. [GeeksforGeeks — Kth Largest Element in an Array](https://www.geeksforgeeks.org/problems/kth-largest-element-in-array/1)
5. [HackerRank — QHEAP1](https://www.hackerrank.com/challenges/qheap1/problem)

## 17. Exhaustive Recursion
**Focus:** explore every choice; backtrack by undoing mutation before returning.

```java
static void subsets(int[] numbers, int index, List<Integer> path,
                    List<List<Integer>> result) {
  if (index == numbers.length) {
    result.add(new ArrayList<>(path));
    return;
  }
  subsets(numbers, index + 1, path, result); // exclude
  path.add(numbers[index]);
  subsets(numbers, index + 1, path, result); // include
  path.remove(path.size() - 1);               // backtrack
}
```

**Practice (5):**
1. [LeetCode — Subsets](https://leetcode.com/problems/subsets/)
2. [LeetCode — Permutations](https://leetcode.com/problems/permutations/)
3. [LeetCode — Combination Sum](https://leetcode.com/problems/combination-sum/)
4. [GeeksforGeeks — Power Set](https://www.geeksforgeeks.org/problems/power-set4302/1)
5. [HackerRank — The Power Sum](https://www.hackerrank.com/challenges/the-power-sum/problem)

## 18. Graph II
**Focus:** multi-source BFS, topological sorting, weighted shortest paths.

```java
static int shortestPath(Map<String, List<String>> graph, String src, String dst) {
  Queue<String> queue = new ArrayDeque<>();
  Map<String, Integer> distance = new HashMap<>();
  queue.add(src);
  distance.put(src, 0);
  while (!queue.isEmpty()) {
    String node = queue.remove();
    if (node.equals(dst)) return distance.get(node);
    for (String next : graph.getOrDefault(node, List.of())) {
      if (!distance.containsKey(next)) {
        distance.put(next, distance.get(node) + 1);
        queue.add(next);
      }
    }
  }
  return -1;
}
```

**Practice (5):**
1. [LeetCode — Number of Islands](https://leetcode.com/problems/number-of-islands/)
2. [LeetCode — Course Schedule](https://leetcode.com/problems/course-schedule/)
3. [LeetCode — Network Delay Time](https://leetcode.com/problems/network-delay-time/)
4. [GeeksforGeeks — Topological Sort](https://www.geeksforgeeks.org/problems/topological-sort/1)
5. [HackerRank — Roads and Libraries](https://www.hackerrank.com/challenges/torque-and-development/problem)

## 19. Mixed Recall
**Focus:** recognize the pattern before coding. State complexity after each solution.

```java
static int bestProfit(int[] prices) {
  int lowest = Integer.MAX_VALUE;
  int best = 0;
  for (int price : prices) {
    lowest = Math.min(lowest, price);
    best = Math.max(best, price - lowest);
  }
  return best;
}
```

**Practice (5):**
1. [LeetCode — Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
2. [LeetCode — 3Sum](https://leetcode.com/problems/3sum/)
3. [LeetCode — LRU Cache](https://leetcode.com/problems/lru-cache/)
4. [GeeksforGeeks — Rotting Oranges](https://www.geeksforgeeks.org/problems/rotten-oranges2536/1)
5. [HackerRank — Sherlock and Anagrams](https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem)

---

## Review checklist

For every problem, write down:

1. **Input and output** in one sentence.
2. **Brute-force solution** and its time/space complexity.
3. **Pattern used**: hash map, two pointers, DFS, BFS, DP, heap, and so on.
4. **Optimized complexity**.
5. **Edge cases**: empty input, one item, duplicates, negative values, cycles, and overflow.

Good luck—prioritize explaining your approach clearly before typing the code.
