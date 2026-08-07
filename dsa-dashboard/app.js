/* DSA Progress Dashboard — app.js */
/* No build system required. Open index.html locally in any browser. */

'use strict';

// ─── DATA ────────────────────────────────────────────────────────────────────
// Generated from DSA_JAVA_15_QUESTION_PRACTICE.md (285 questions, 19 modules)
const MODULES_DATA = [
  {
    "id": 1,
    "name": "Introduction — Java and Basic Logic",
    "questions": [
      {
        "title": "Running Sum of 1d Array",
        "url": "https://leetcode.com/problems/running-sum-of-1d-array/",
        "platform": "LeetCode"
      },
      {
        "title": "Fizz Buzz",
        "url": "https://leetcode.com/problems/fizz-buzz/",
        "platform": "LeetCode"
      },
      {
        "title": "Number of Steps to Reduce a Number to Zero",
        "url": "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/",
        "platform": "LeetCode"
      },
      {
        "title": "Build Array from Permutation",
        "url": "https://leetcode.com/problems/build-array-from-permutation/",
        "platform": "LeetCode"
      },
      {
        "title": "Concatenation of Array",
        "url": "https://leetcode.com/problems/concatenation-of-array/",
        "platform": "LeetCode"
      },
      {
        "title": "Shuffle the Array",
        "url": "https://leetcode.com/problems/shuffle-the-array/",
        "platform": "LeetCode"
      },
      {
        "title": "Richest Customer Wealth",
        "url": "https://leetcode.com/problems/richest-customer-wealth/",
        "platform": "LeetCode"
      },
      {
        "title": "Final Value of Variable After Performing Operations",
        "url": "https://leetcode.com/problems/final-value-of-variable-after-performing-operations/",
        "platform": "LeetCode"
      },
      {
        "title": "Kids With the Greatest Number of Candies",
        "url": "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/",
        "platform": "LeetCode"
      },
      {
        "title": "Number of Good Pairs",
        "url": "https://leetcode.com/problems/number-of-good-pairs/",
        "platform": "LeetCode"
      },
      {
        "title": "Java Loops I",
        "url": "https://www.hackerrank.com/challenges/java-loops-i/problem",
        "platform": "HackerRank"
      },
      {
        "title": "Java 1D Array",
        "url": "https://www.hackerrank.com/challenges/java-1d-array-introduction/problem",
        "platform": "HackerRank"
      },
      {
        "title": "Java Datatypes",
        "url": "https://www.hackerrank.com/challenges/java-datatypes/problem",
        "platform": "HackerRank"
      },
      {
        "title": "Sum of Array Elements",
        "url": "https://www.geeksforgeeks.org/problems/sum-of-array2326/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Largest Element in Array",
        "url": "https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1",
        "platform": "GeeksforGeeks"
      }
    ]
  },
  {
    "id": 2,
    "name": "Big O Notation and Analysis",
    "questions": [
      {
        "title": "A Basic Quiz on Algorithms #1",
        "url": "https://www.hackerrank.com/challenges/basic-algo-quiz-1/problem",
        "platform": "HackerRank"
      },
      {
        "title": "A Basic Quiz on Algorithms #2",
        "url": "https://www.hackerrank.com/challenges/data-structures-quiz-2/problem",
        "platform": "HackerRank"
      },
      {
        "title": "Running Time of Algorithms",
        "url": "https://www.hackerrank.com/challenges/runningtime/problem",
        "platform": "HackerRank"
      },
      {
        "title": "Search Insert Position",
        "url": "https://leetcode.com/problems/search-insert-position/",
        "platform": "LeetCode"
      },
      {
        "title": "Binary Search",
        "url": "https://leetcode.com/problems/binary-search/",
        "platform": "LeetCode"
      },
      {
        "title": "Find the Index of the First Occurrence in a String",
        "url": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
        "platform": "LeetCode"
      },
      {
        "title": "Find Peak Element",
        "url": "https://leetcode.com/problems/find-peak-element/",
        "platform": "LeetCode"
      },
      {
        "title": "Sqrt(x)",
        "url": "https://leetcode.com/problems/sqrtx/",
        "platform": "LeetCode"
      },
      {
        "title": "Guess Number Higher or Lower",
        "url": "https://leetcode.com/problems/guess-number-higher-or-lower/",
        "platform": "LeetCode"
      },
      {
        "title": "Find Smallest Letter Greater Than Target",
        "url": "https://leetcode.com/problems/find-smallest-letter-greater-than-target/",
        "platform": "LeetCode"
      },
      {
        "title": "First Bad Version",
        "url": "https://leetcode.com/problems/first-bad-version/",
        "platform": "LeetCode"
      },
      {
        "title": "Binary Search",
        "url": "https://www.geeksforgeeks.org/problems/binary-search-1587115620/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Analysis of Algorithms",
        "url": "https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Floor in a Sorted Array",
        "url": "https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Search in Rotated Sorted Array",
        "url": "https://www.geeksforgeeks.org/problems/search-in-a-rotated-array4618/1",
        "platform": "GeeksforGeeks"
      }
    ]
  },
  {
    "id": 3,
    "name": "Hashing",
    "questions": [
      {
        "title": "Two Sum",
        "url": "https://leetcode.com/problems/two-sum/",
        "platform": "LeetCode"
      },
      {
        "title": "Contains Duplicate",
        "url": "https://leetcode.com/problems/contains-duplicate/",
        "platform": "LeetCode"
      },
      {
        "title": "Valid Anagram",
        "url": "https://leetcode.com/problems/valid-anagram/",
        "platform": "LeetCode"
      },
      {
        "title": "Group Anagrams",
        "url": "https://leetcode.com/problems/group-anagrams/",
        "platform": "LeetCode"
      },
      {
        "title": "Happy Number",
        "url": "https://leetcode.com/problems/happy-number/",
        "platform": "LeetCode"
      },
      {
        "title": "Isomorphic Strings",
        "url": "https://leetcode.com/problems/isomorphic-strings/",
        "platform": "LeetCode"
      },
      {
        "title": "Word Pattern",
        "url": "https://leetcode.com/problems/word-pattern/",
        "platform": "LeetCode"
      },
      {
        "title": "Intersection of Two Arrays",
        "url": "https://leetcode.com/problems/intersection-of-two-arrays/",
        "platform": "LeetCode"
      },
      {
        "title": "Top K Frequent Elements",
        "url": "https://leetcode.com/problems/top-k-frequent-elements/",
        "platform": "LeetCode"
      },
      {
        "title": "Longest Consecutive Sequence",
        "url": "https://leetcode.com/problems/longest-consecutive-sequence/",
        "platform": "LeetCode"
      },
      {
        "title": "Subarray Sum Equals K",
        "url": "https://leetcode.com/problems/subarray-sum-equals-k/",
        "platform": "LeetCode"
      },
      {
        "title": "Two Sum - Pair with Given Sum",
        "url": "https://www.geeksforgeeks.org/problems/key-pair5616/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "First Repeating Element",
        "url": "https://www.geeksforgeeks.org/problems/first-repeating-element4018/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Hash Tables: Ransom Note",
        "url": "https://www.hackerrank.com/challenges/ctci-ransom-note/problem",
        "platform": "HackerRank"
      },
      {
        "title": "Frequency Queries",
        "url": "https://www.hackerrank.com/challenges/frequency-queries/problem",
        "platform": "HackerRank"
      }
    ]
  },
  {
    "id": 4,
    "name": "Beginner Recursion",
    "questions": [
      {
        "title": "Fibonacci Number",
        "url": "https://leetcode.com/problems/fibonacci-number/",
        "platform": "LeetCode"
      },
      {
        "title": "Pow(x, n)",
        "url": "https://leetcode.com/problems/powx-n/",
        "platform": "LeetCode"
      },
      {
        "title": "Reverse String",
        "url": "https://leetcode.com/problems/reverse-string/",
        "platform": "LeetCode"
      },
      {
        "title": "Palindrome Linked List",
        "url": "https://leetcode.com/problems/palindrome-linked-list/",
        "platform": "LeetCode"
      },
      {
        "title": "K-th Symbol in Grammar",
        "url": "https://leetcode.com/problems/k-th-symbol-in-grammar/",
        "platform": "LeetCode"
      },
      {
        "title": "Merge Two Sorted Lists",
        "url": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "platform": "LeetCode"
      },
      {
        "title": "Reverse Linked List",
        "url": "https://leetcode.com/problems/reverse-linked-list/",
        "platform": "LeetCode"
      },
      {
        "title": "Swap Nodes in Pairs",
        "url": "https://leetcode.com/problems/swap-nodes-in-pairs/",
        "platform": "LeetCode"
      },
      {
        "title": "Binary Tree Preorder Traversal",
        "url": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
        "platform": "LeetCode"
      },
      {
        "title": "Binary Tree Inorder Traversal",
        "url": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        "platform": "LeetCode"
      },
      {
        "title": "Maximum Depth of Binary Tree",
        "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "platform": "LeetCode"
      },
      {
        "title": "Sum of Digits",
        "url": "https://www.geeksforgeeks.org/sum-digit-number-using-recursion/",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Recursive Bubble Sort",
        "url": "https://www.geeksforgeeks.org/recursive-bubble-sort/",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Recursive Digit Sum",
        "url": "https://www.hackerrank.com/challenges/recursive-digit-sum/problem",
        "platform": "HackerRank"
      },
      {
        "title": "Recursion: Davis' Staircase",
        "url": "https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem",
        "platform": "HackerRank"
      }
    ]
  },
  {
    "id": 5,
    "name": "Linked List I — Traversal and Basic Updates",
    "questions": [
      {
        "title": "Linked List Cycle",
        "url": "https://leetcode.com/problems/linked-list-cycle/",
        "platform": "LeetCode"
      },
      {
        "title": "Reverse Linked List",
        "url": "https://leetcode.com/problems/reverse-linked-list/",
        "platform": "LeetCode"
      },
      {
        "title": "Merge Two Sorted Lists",
        "url": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "platform": "LeetCode"
      },
      {
        "title": "Remove Duplicates from Sorted List",
        "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
        "platform": "LeetCode"
      },
      {
        "title": "Intersection of Two Linked Lists",
        "url": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
        "platform": "LeetCode"
      },
      {
        "title": "Remove Linked List Elements",
        "url": "https://leetcode.com/problems/remove-linked-list-elements/",
        "platform": "LeetCode"
      },
      {
        "title": "Middle of the Linked List",
        "url": "https://leetcode.com/problems/middle-of-the-linked-list/",
        "platform": "LeetCode"
      },
      {
        "title": "Delete Node in a Linked List",
        "url": "https://leetcode.com/problems/delete-node-in-a-linked-list/",
        "platform": "LeetCode"
      },
      {
        "title": "Convert Binary Number in a Linked List to Integer",
        "url": "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/",
        "platform": "LeetCode"
      },
      {
        "title": "Design Linked List",
        "url": "https://leetcode.com/problems/design-linked-list/",
        "platform": "LeetCode"
      },
      {
        "title": "Palindrome Linked List",
        "url": "https://leetcode.com/problems/palindrome-linked-list/",
        "platform": "LeetCode"
      },
      {
        "title": "Reverse a Linked List",
        "url": "https://www.geeksforgeeks.org/problems/reverse-a-linked-list/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Count Nodes of Linked List",
        "url": "https://www.geeksforgeeks.org/problems/count-nodes-of-linked-list/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Print the Elements of a Linked List",
        "url": "https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem",
        "platform": "HackerRank"
      },
      {
        "title": "Insert a Node at the Tail of a Linked List",
        "url": "https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem",
        "platform": "HackerRank"
      }
    ]
  },
  {
    "id": 6,
    "name": "Binary Tree I — DFS Traversals and Fundamentals",
    "questions": [
      {
        "title": "Maximum Depth of Binary Tree",
        "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "platform": "LeetCode"
      },
      {
        "title": "Same Tree",
        "url": "https://leetcode.com/problems/same-tree/",
        "platform": "LeetCode"
      },
      {
        "title": "Invert Binary Tree",
        "url": "https://leetcode.com/problems/invert-binary-tree/",
        "platform": "LeetCode"
      },
      {
        "title": "Symmetric Tree",
        "url": "https://leetcode.com/problems/symmetric-tree/",
        "platform": "LeetCode"
      },
      {
        "title": "Diameter of Binary Tree",
        "url": "https://leetcode.com/problems/diameter-of-binary-tree/",
        "platform": "LeetCode"
      },
      {
        "title": "Balanced Binary Tree",
        "url": "https://leetcode.com/problems/balanced-binary-tree/",
        "platform": "LeetCode"
      },
      {
        "title": "Path Sum",
        "url": "https://leetcode.com/problems/path-sum/",
        "platform": "LeetCode"
      },
      {
        "title": "Binary Tree Preorder Traversal",
        "url": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
        "platform": "LeetCode"
      },
      {
        "title": "Binary Tree Inorder Traversal",
        "url": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        "platform": "LeetCode"
      },
      {
        "title": "Binary Tree Postorder Traversal",
        "url": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
        "platform": "LeetCode"
      },
      {
        "title": "Count Complete Tree Nodes",
        "url": "https://leetcode.com/problems/count-complete-tree-nodes/",
        "platform": "LeetCode"
      },
      {
        "title": "Tree Traversals",
        "url": "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Height of Binary Tree",
        "url": "https://www.geeksforgeeks.org/problems/height-of-binary-tree/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Tree: Preorder Traversal",
        "url": "https://www.hackerrank.com/challenges/tree-preorder-traversal/problem",
        "platform": "HackerRank"
      },
      {
        "title": "Tree: Inorder Traversal",
        "url": "https://www.hackerrank.com/challenges/tree-inorder-traversal/problem",
        "platform": "HackerRank"
      }
    ]
  },
  {
    "id": 7,
    "name": "Graph I — Unweighted Graphs, DFS, BFS, and Grids",
    "questions": [
      {
        "title": "Find if Path Exists in Graph",
        "url": "https://leetcode.com/problems/find-if-path-exists-in-graph/",
        "platform": "LeetCode"
      },
      {
        "title": "Number of Provinces",
        "url": "https://leetcode.com/problems/number-of-provinces/",
        "platform": "LeetCode"
      },
      {
        "title": "Flood Fill",
        "url": "https://leetcode.com/problems/flood-fill/",
        "platform": "LeetCode"
      },
      {
        "title": "Number of Islands",
        "url": "https://leetcode.com/problems/number-of-islands/",
        "platform": "LeetCode"
      },
      {
        "title": "Max Area of Island",
        "url": "https://leetcode.com/problems/max-area-of-island/",
        "platform": "LeetCode"
      },
      {
        "title": "Island Perimeter",
        "url": "https://leetcode.com/problems/island-perimeter/",
        "platform": "LeetCode"
      },
      {
        "title": "Surrounded Regions",
        "url": "https://leetcode.com/problems/surrounded-regions/",
        "platform": "LeetCode"
      },
      {
        "title": "Rotting Oranges",
        "url": "https://leetcode.com/problems/rotting-oranges/",
        "platform": "LeetCode"
      },
      {
        "title": "01 Matrix",
        "url": "https://leetcode.com/problems/01-matrix/",
        "platform": "LeetCode"
      },
      {
        "title": "Clone Graph",
        "url": "https://leetcode.com/problems/clone-graph/",
        "platform": "LeetCode"
      },
      {
        "title": "Keys and Rooms",
        "url": "https://leetcode.com/problems/keys-and-rooms/",
        "platform": "LeetCode"
      },
      {
        "title": "Shortest Path in Binary Matrix",
        "url": "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
        "platform": "LeetCode"
      },
      {
        "title": "DFS of Graph",
        "url": "https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "BFS of Graph",
        "url": "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "BFS: Shortest Reach in a Graph",
        "url": "https://www.hackerrank.com/challenges/ctci-bfs-shortest-reach/problem",
        "platform": "HackerRank"
      }
    ]
  },
  {
    "id": 8,
    "name": "Sliding Window",
    "questions": [
      {
        "title": "Maximum Average Subarray I",
        "url": "https://leetcode.com/problems/maximum-average-subarray-i/",
        "platform": "LeetCode"
      },
      {
        "title": "Longest Substring Without Repeating Characters",
        "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "platform": "LeetCode"
      },
      {
        "title": "Minimum Size Subarray Sum",
        "url": "https://leetcode.com/problems/minimum-size-subarray-sum/",
        "platform": "LeetCode"
      },
      {
        "title": "Permutation in String",
        "url": "https://leetcode.com/problems/permutation-in-string/",
        "platform": "LeetCode"
      },
      {
        "title": "Find All Anagrams in a String",
        "url": "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        "platform": "LeetCode"
      },
      {
        "title": "Longest Repeating Character Replacement",
        "url": "https://leetcode.com/problems/longest-repeating-character-replacement/",
        "platform": "LeetCode"
      },
      {
        "title": "Minimum Window Substring",
        "url": "https://leetcode.com/problems/minimum-window-substring/",
        "platform": "LeetCode"
      },
      {
        "title": "Sliding Window Maximum",
        "url": "https://leetcode.com/problems/sliding-window-maximum/",
        "platform": "LeetCode"
      },
      {
        "title": "Fruits Into Baskets",
        "url": "https://leetcode.com/problems/fruit-into-baskets/",
        "platform": "LeetCode"
      },
      {
        "title": "Subarray Product Less Than K",
        "url": "https://leetcode.com/problems/subarray-product-less-than-k/",
        "platform": "LeetCode"
      },
      {
        "title": "Max Consecutive Ones III",
        "url": "https://leetcode.com/problems/max-consecutive-ones-iii/",
        "platform": "LeetCode"
      },
      {
        "title": "Grumpy Bookstore Owner",
        "url": "https://leetcode.com/problems/grumpy-bookstore-owner/",
        "platform": "LeetCode"
      },
      {
        "title": "Maximum Sum Subarray of Size K",
        "url": "https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Longest Substring with Distinct Characters",
        "url": "https://www.geeksforgeeks.org/problems/longest-distinct-characters-in-string5848/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Java Dequeue",
        "url": "https://www.hackerrank.com/challenges/java-dequeue/problem",
        "platform": "HackerRank"
      }
    ]
  },
  {
    "id": 9,
    "name": "Two Pointers",
    "questions": [
      {
        "title": "Valid Palindrome",
        "url": "https://leetcode.com/problems/valid-palindrome/",
        "platform": "LeetCode"
      },
      {
        "title": "Two Sum II - Input Array Is Sorted",
        "url": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
        "platform": "LeetCode"
      },
      {
        "title": "Container With Most Water",
        "url": "https://leetcode.com/problems/container-with-most-water/",
        "platform": "LeetCode"
      },
      {
        "title": "3Sum",
        "url": "https://leetcode.com/problems/3sum/",
        "platform": "LeetCode"
      },
      {
        "title": "Move Zeroes",
        "url": "https://leetcode.com/problems/move-zeroes/",
        "platform": "LeetCode"
      },
      {
        "title": "Squares of a Sorted Array",
        "url": "https://leetcode.com/problems/squares-of-a-sorted-array/",
        "platform": "LeetCode"
      },
      {
        "title": "Remove Duplicates from Sorted Array",
        "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        "platform": "LeetCode"
      },
      {
        "title": "Sort Colors",
        "url": "https://leetcode.com/problems/sort-colors/",
        "platform": "LeetCode"
      },
      {
        "title": "Trapping Rain Water",
        "url": "https://leetcode.com/problems/trapping-rain-water/",
        "platform": "LeetCode"
      },
      {
        "title": "Backspace String Compare",
        "url": "https://leetcode.com/problems/backspace-string-compare/",
        "platform": "LeetCode"
      },
      {
        "title": "Boats to Save People",
        "url": "https://leetcode.com/problems/boats-to-save-people/",
        "platform": "LeetCode"
      },
      {
        "title": "Reverse Vowels of a String",
        "url": "https://leetcode.com/problems/reverse-vowels-of-a-string/",
        "platform": "LeetCode"
      },
      {
        "title": "Pair with Given Sum in Sorted Array",
        "url": "https://www.geeksforgeeks.org/problems/key-pair5616/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Trapping Rain Water",
        "url": "https://www.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Strong Password",
        "url": "https://www.hackerrank.com/challenges/strong-password/problem",
        "platform": "HackerRank"
      }
    ]
  },
  {
    "id": 10,
    "name": "Binary Search",
    "questions": [
      {
        "title": "Binary Search",
        "url": "https://leetcode.com/problems/binary-search/",
        "platform": "LeetCode"
      },
      {
        "title": "Search Insert Position",
        "url": "https://leetcode.com/problems/search-insert-position/",
        "platform": "LeetCode"
      },
      {
        "title": "Search a 2D Matrix",
        "url": "https://leetcode.com/problems/search-a-2d-matrix/",
        "platform": "LeetCode"
      },
      {
        "title": "Find First and Last Position of Element in Sorted Array",
        "url": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        "platform": "LeetCode"
      },
      {
        "title": "Search in Rotated Sorted Array",
        "url": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "platform": "LeetCode"
      },
      {
        "title": "Find Minimum in Rotated Sorted Array",
        "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        "platform": "LeetCode"
      },
      {
        "title": "Find Peak Element",
        "url": "https://leetcode.com/problems/find-peak-element/",
        "platform": "LeetCode"
      },
      {
        "title": "Koko Eating Bananas",
        "url": "https://leetcode.com/problems/koko-eating-bananas/",
        "platform": "LeetCode"
      },
      {
        "title": "Capacity To Ship Packages Within D Days",
        "url": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
        "platform": "LeetCode"
      },
      {
        "title": "Median of Two Sorted Arrays",
        "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        "platform": "LeetCode"
      },
      {
        "title": "Time Based Key-Value Store",
        "url": "https://leetcode.com/problems/time-based-key-value-store/",
        "platform": "LeetCode"
      },
      {
        "title": "Split Array Largest Sum",
        "url": "https://leetcode.com/problems/split-array-largest-sum/",
        "platform": "LeetCode"
      },
      {
        "title": "Binary Search",
        "url": "https://www.geeksforgeeks.org/problems/binary-search-1587115620/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Allocate Minimum Pages",
        "url": "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Intro to Tutorial Challenges",
        "url": "https://www.hackerrank.com/challenges/tutorial-intro/problem",
        "platform": "HackerRank"
      }
    ]
  },
  {
    "id": 11,
    "name": "Dynamic Programming",
    "questions": [
      {
        "title": "Climbing Stairs",
        "url": "https://leetcode.com/problems/climbing-stairs/",
        "platform": "LeetCode"
      },
      {
        "title": "Min Cost Climbing Stairs",
        "url": "https://leetcode.com/problems/min-cost-climbing-stairs/",
        "platform": "LeetCode"
      },
      {
        "title": "House Robber",
        "url": "https://leetcode.com/problems/house-robber/",
        "platform": "LeetCode"
      },
      {
        "title": "House Robber II",
        "url": "https://leetcode.com/problems/house-robber-ii/",
        "platform": "LeetCode"
      },
      {
        "title": "Coin Change",
        "url": "https://leetcode.com/problems/coin-change/",
        "platform": "LeetCode"
      },
      {
        "title": "Coin Change II",
        "url": "https://leetcode.com/problems/coin-change-ii/",
        "platform": "LeetCode"
      },
      {
        "title": "Longest Increasing Subsequence",
        "url": "https://leetcode.com/problems/longest-increasing-subsequence/",
        "platform": "LeetCode"
      },
      {
        "title": "Longest Common Subsequence",
        "url": "https://leetcode.com/problems/longest-common-subsequence/",
        "platform": "LeetCode"
      },
      {
        "title": "Unique Paths",
        "url": "https://leetcode.com/problems/unique-paths/",
        "platform": "LeetCode"
      },
      {
        "title": "Partition Equal Subset Sum",
        "url": "https://leetcode.com/problems/partition-equal-subset-sum/",
        "platform": "LeetCode"
      },
      {
        "title": "Word Break",
        "url": "https://leetcode.com/problems/word-break/",
        "platform": "LeetCode"
      },
      {
        "title": "Edit Distance",
        "url": "https://leetcode.com/problems/edit-distance/",
        "platform": "LeetCode"
      },
      {
        "title": "0 - 1 Knapsack Problem",
        "url": "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Longest Common Subsequence",
        "url": "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "The Coin Change Problem",
        "url": "https://www.hackerrank.com/challenges/ctci-coin-change/problem",
        "platform": "HackerRank"
      }
    ]
  },
  {
    "id": 12,
    "name": "Stack and Monotonic Stack",
    "questions": [
      {
        "title": "Valid Parentheses",
        "url": "https://leetcode.com/problems/valid-parentheses/",
        "platform": "LeetCode"
      },
      {
        "title": "Min Stack",
        "url": "https://leetcode.com/problems/min-stack/",
        "platform": "LeetCode"
      },
      {
        "title": "Evaluate Reverse Polish Notation",
        "url": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
        "platform": "LeetCode"
      },
      {
        "title": "Daily Temperatures",
        "url": "https://leetcode.com/problems/daily-temperatures/",
        "platform": "LeetCode"
      },
      {
        "title": "Next Greater Element I",
        "url": "https://leetcode.com/problems/next-greater-element-i/",
        "platform": "LeetCode"
      },
      {
        "title": "Next Greater Element II",
        "url": "https://leetcode.com/problems/next-greater-element-ii/",
        "platform": "LeetCode"
      },
      {
        "title": "Largest Rectangle in Histogram",
        "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "platform": "LeetCode"
      },
      {
        "title": "Car Fleet",
        "url": "https://leetcode.com/problems/car-fleet/",
        "platform": "LeetCode"
      },
      {
        "title": "Asteroid Collision",
        "url": "https://leetcode.com/problems/asteroid-collision/",
        "platform": "LeetCode"
      },
      {
        "title": "Decode String",
        "url": "https://leetcode.com/problems/decode-string/",
        "platform": "LeetCode"
      },
      {
        "title": "Simplify Path",
        "url": "https://leetcode.com/problems/simplify-path/",
        "platform": "LeetCode"
      },
      {
        "title": "Basic Calculator II",
        "url": "https://leetcode.com/problems/basic-calculator-ii/",
        "platform": "LeetCode"
      },
      {
        "title": "Parenthesis Checker",
        "url": "https://www.geeksforgeeks.org/problems/parenthesis-checker2744/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Next Larger Element",
        "url": "https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Balanced Brackets",
        "url": "https://www.hackerrank.com/challenges/balanced-brackets/problem",
        "platform": "HackerRank"
      }
    ]
  },
  {
    "id": 13,
    "name": "Array and String",
    "questions": [
      {
        "title": "Best Time to Buy and Sell Stock",
        "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "platform": "LeetCode"
      },
      {
        "title": "Product of Array Except Self",
        "url": "https://leetcode.com/problems/product-of-array-except-self/",
        "platform": "LeetCode"
      },
      {
        "title": "Maximum Subarray",
        "url": "https://leetcode.com/problems/maximum-subarray/",
        "platform": "LeetCode"
      },
      {
        "title": "Majority Element",
        "url": "https://leetcode.com/problems/majority-element/",
        "platform": "LeetCode"
      },
      {
        "title": "Rotate Array",
        "url": "https://leetcode.com/problems/rotate-array/",
        "platform": "LeetCode"
      },
      {
        "title": "Set Matrix Zeroes",
        "url": "https://leetcode.com/problems/set-matrix-zeroes/",
        "platform": "LeetCode"
      },
      {
        "title": "Spiral Matrix",
        "url": "https://leetcode.com/problems/spiral-matrix/",
        "platform": "LeetCode"
      },
      {
        "title": "Rotate Image",
        "url": "https://leetcode.com/problems/rotate-image/",
        "platform": "LeetCode"
      },
      {
        "title": "Valid Sudoku",
        "url": "https://leetcode.com/problems/valid-sudoku/",
        "platform": "LeetCode"
      },
      {
        "title": "Longest Common Prefix",
        "url": "https://leetcode.com/problems/longest-common-prefix/",
        "platform": "LeetCode"
      },
      {
        "title": "String to Integer (atoi)",
        "url": "https://leetcode.com/problems/string-to-integer-atoi/",
        "platform": "LeetCode"
      },
      {
        "title": "Longest Palindromic Substring",
        "url": "https://leetcode.com/problems/longest-palindromic-substring/",
        "platform": "LeetCode"
      },
      {
        "title": "Kadane's Algorithm",
        "url": "https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Leaders in an Array",
        "url": "https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Arrays - DS",
        "url": "https://www.hackerrank.com/challenges/arrays-ds/problem",
        "platform": "HackerRank"
      }
    ]
  },
  {
    "id": 14,
    "name": "Linked List II — Fast/Slow, Reversal, and Advanced Operations",
    "questions": [
      {
        "title": "Remove Nth Node From End of List",
        "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        "platform": "LeetCode"
      },
      {
        "title": "Reorder List",
        "url": "https://leetcode.com/problems/reorder-list/",
        "platform": "LeetCode"
      },
      {
        "title": "Add Two Numbers",
        "url": "https://leetcode.com/problems/add-two-numbers/",
        "platform": "LeetCode"
      },
      {
        "title": "Copy List with Random Pointer",
        "url": "https://leetcode.com/problems/copy-list-with-random-pointer/",
        "platform": "LeetCode"
      },
      {
        "title": "LRU Cache",
        "url": "https://leetcode.com/problems/lru-cache/",
        "platform": "LeetCode"
      },
      {
        "title": "Reverse Nodes in k-Group",
        "url": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        "platform": "LeetCode"
      },
      {
        "title": "Rotate List",
        "url": "https://leetcode.com/problems/rotate-list/",
        "platform": "LeetCode"
      },
      {
        "title": "Partition List",
        "url": "https://leetcode.com/problems/partition-list/",
        "platform": "LeetCode"
      },
      {
        "title": "Sort List",
        "url": "https://leetcode.com/problems/sort-list/",
        "platform": "LeetCode"
      },
      {
        "title": "Linked List Cycle II",
        "url": "https://leetcode.com/problems/linked-list-cycle-ii/",
        "platform": "LeetCode"
      },
      {
        "title": "Flatten a Multilevel Doubly Linked List",
        "url": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
        "platform": "LeetCode"
      },
      {
        "title": "Merge k Sorted Lists",
        "url": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "platform": "LeetCode"
      },
      {
        "title": "Detect Loop in Linked List",
        "url": "https://www.geeksforgeeks.org/problems/detect-loop-in-linked-list/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Add Two Numbers Represented by Linked Lists",
        "url": "https://www.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Insert a Node at a Specific Position in a Linked List",
        "url": "https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem",
        "platform": "HackerRank"
      }
    ]
  },
  {
    "id": 15,
    "name": "Binary Tree II — BFS, BST, Paths, and Construction",
    "questions": [
      {
        "title": "Binary Tree Level Order Traversal",
        "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "platform": "LeetCode"
      },
      {
        "title": "Binary Tree Right Side View",
        "url": "https://leetcode.com/problems/binary-tree-right-side-view/",
        "platform": "LeetCode"
      },
      {
        "title": "Average of Levels in Binary Tree",
        "url": "https://leetcode.com/problems/average-of-levels-in-binary-tree/",
        "platform": "LeetCode"
      },
      {
        "title": "Validate Binary Search Tree",
        "url": "https://leetcode.com/problems/validate-binary-search-tree/",
        "platform": "LeetCode"
      },
      {
        "title": "Kth Smallest Element in a BST",
        "url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
        "platform": "LeetCode"
      },
      {
        "title": "Lowest Common Ancestor of a Binary Search Tree",
        "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
        "platform": "LeetCode"
      },
      {
        "title": "Lowest Common Ancestor of a Binary Tree",
        "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        "platform": "LeetCode"
      },
      {
        "title": "Binary Tree Maximum Path Sum",
        "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        "platform": "LeetCode"
      },
      {
        "title": "Construct Binary Tree from Preorder and Inorder Traversal",
        "url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        "platform": "LeetCode"
      },
      {
        "title": "Serialize and Deserialize Binary Tree",
        "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
        "platform": "LeetCode"
      },
      {
        "title": "Populating Next Right Pointers in Each Node",
        "url": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
        "platform": "LeetCode"
      },
      {
        "title": "Path Sum III",
        "url": "https://leetcode.com/problems/path-sum-iii/",
        "platform": "LeetCode"
      },
      {
        "title": "Level Order Traversal",
        "url": "https://www.geeksforgeeks.org/problems/level-order-traversal/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Check for BST",
        "url": "https://www.geeksforgeeks.org/problems/check-for-bst/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Tree: Level Order Traversal",
        "url": "https://www.hackerrank.com/challenges/tree-level-order-traversal/problem",
        "platform": "HackerRank"
      }
    ]
  },
  {
    "id": 16,
    "name": "Heap / Priority Queue",
    "questions": [
      {
        "title": "Kth Largest Element in an Array",
        "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        "platform": "LeetCode"
      },
      {
        "title": "Last Stone Weight",
        "url": "https://leetcode.com/problems/last-stone-weight/",
        "platform": "LeetCode"
      },
      {
        "title": "Top K Frequent Elements",
        "url": "https://leetcode.com/problems/top-k-frequent-elements/",
        "platform": "LeetCode"
      },
      {
        "title": "K Closest Points to Origin",
        "url": "https://leetcode.com/problems/k-closest-points-to-origin/",
        "platform": "LeetCode"
      },
      {
        "title": "Kth Largest Element in a Stream",
        "url": "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
        "platform": "LeetCode"
      },
      {
        "title": "Task Scheduler",
        "url": "https://leetcode.com/problems/task-scheduler/",
        "platform": "LeetCode"
      },
      {
        "title": "Find Median from Data Stream",
        "url": "https://leetcode.com/problems/find-median-from-data-stream/",
        "platform": "LeetCode"
      },
      {
        "title": "Merge k Sorted Lists",
        "url": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "platform": "LeetCode"
      },
      {
        "title": "Smallest Range Covering Elements from K Lists",
        "url": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
        "platform": "LeetCode"
      },
      {
        "title": "Reorganize String",
        "url": "https://leetcode.com/problems/reorganize-string/",
        "platform": "LeetCode"
      },
      {
        "title": "Furthest Building You Can Reach",
        "url": "https://leetcode.com/problems/furthest-building-you-can-reach/",
        "platform": "LeetCode"
      },
      {
        "title": "IPO",
        "url": "https://leetcode.com/problems/ipo/",
        "platform": "LeetCode"
      },
      {
        "title": "Kth Largest Element in an Array",
        "url": "https://www.geeksforgeeks.org/problems/kth-largest-element-in-array/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Merge K Sorted Linked Lists",
        "url": "https://www.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "QHEAP1",
        "url": "https://www.hackerrank.com/challenges/qheap1/problem",
        "platform": "HackerRank"
      }
    ]
  },
  {
    "id": 17,
    "name": "Exhaustive Recursion / Backtracking",
    "questions": [
      {
        "title": "Subsets",
        "url": "https://leetcode.com/problems/subsets/",
        "platform": "LeetCode"
      },
      {
        "title": "Subsets II",
        "url": "https://leetcode.com/problems/subsets-ii/",
        "platform": "LeetCode"
      },
      {
        "title": "Permutations",
        "url": "https://leetcode.com/problems/permutations/",
        "platform": "LeetCode"
      },
      {
        "title": "Permutations II",
        "url": "https://leetcode.com/problems/permutations-ii/",
        "platform": "LeetCode"
      },
      {
        "title": "Combination Sum",
        "url": "https://leetcode.com/problems/combination-sum/",
        "platform": "LeetCode"
      },
      {
        "title": "Combination Sum II",
        "url": "https://leetcode.com/problems/combination-sum-ii/",
        "platform": "LeetCode"
      },
      {
        "title": "Combinations",
        "url": "https://leetcode.com/problems/combinations/",
        "platform": "LeetCode"
      },
      {
        "title": "Letter Combinations of a Phone Number",
        "url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        "platform": "LeetCode"
      },
      {
        "title": "Generate Parentheses",
        "url": "https://leetcode.com/problems/generate-parentheses/",
        "platform": "LeetCode"
      },
      {
        "title": "Palindrome Partitioning",
        "url": "https://leetcode.com/problems/palindrome-partitioning/",
        "platform": "LeetCode"
      },
      {
        "title": "Word Search",
        "url": "https://leetcode.com/problems/word-search/",
        "platform": "LeetCode"
      },
      {
        "title": "N-Queens",
        "url": "https://leetcode.com/problems/n-queens/",
        "platform": "LeetCode"
      },
      {
        "title": "Power Set",
        "url": "https://www.geeksforgeeks.org/problems/power-set4302/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Rat in a Maze Problem - I",
        "url": "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "The Power Sum",
        "url": "https://www.hackerrank.com/challenges/the-power-sum/problem",
        "platform": "HackerRank"
      }
    ]
  },
  {
    "id": 18,
    "name": "Graph II — Cycles, DAGs, Weighted Graphs, DSU, and MST",
    "questions": [
      {
        "title": "Course Schedule",
        "url": "https://leetcode.com/problems/course-schedule/",
        "platform": "LeetCode"
      },
      {
        "title": "Course Schedule II",
        "url": "https://leetcode.com/problems/course-schedule-ii/",
        "platform": "LeetCode"
      },
      {
        "title": "Find Eventual Safe States",
        "url": "https://leetcode.com/problems/find-eventual-safe-states/",
        "platform": "LeetCode"
      },
      {
        "title": "Is Graph Bipartite?",
        "url": "https://leetcode.com/problems/is-graph-bipartite/",
        "platform": "LeetCode"
      },
      {
        "title": "Redundant Connection",
        "url": "https://leetcode.com/problems/redundant-connection/",
        "platform": "LeetCode"
      },
      {
        "title": "Number of Connected Components in an Undirected Graph",
        "url": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
        "platform": "LeetCode"
      },
      {
        "title": "Network Delay Time",
        "url": "https://leetcode.com/problems/network-delay-time/",
        "platform": "LeetCode"
      },
      {
        "title": "Path With Minimum Effort",
        "url": "https://leetcode.com/problems/path-with-minimum-effort/",
        "platform": "LeetCode"
      },
      {
        "title": "Cheapest Flights Within K Stops",
        "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
        "platform": "LeetCode"
      },
      {
        "title": "Min Cost to Connect All Points",
        "url": "https://leetcode.com/problems/min-cost-to-connect-all-points/",
        "platform": "LeetCode"
      },
      {
        "title": "Reconstruct Itinerary",
        "url": "https://leetcode.com/problems/reconstruct-itinerary/",
        "platform": "LeetCode"
      },
      {
        "title": "Alien Dictionary",
        "url": "https://leetcode.com/problems/alien-dictionary/",
        "platform": "LeetCode"
      },
      {
        "title": "Topological Sort",
        "url": "https://www.geeksforgeeks.org/problems/topological-sort/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Dijkstra Algorithm",
        "url": "https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Dijkstra: Shortest Reach 2",
        "url": "https://www.hackerrank.com/challenges/dijkstrashortreach/problem",
        "platform": "HackerRank"
      }
    ]
  },
  {
    "id": 19,
    "name": "Mixed Recall — Pattern Recognition",
    "questions": [
      {
        "title": "Valid Parentheses",
        "url": "https://leetcode.com/problems/valid-parentheses/",
        "platform": "LeetCode"
      },
      {
        "title": "Two Sum",
        "url": "https://leetcode.com/problems/two-sum/",
        "platform": "LeetCode"
      },
      {
        "title": "Best Time to Buy and Sell Stock",
        "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "platform": "LeetCode"
      },
      {
        "title": "3Sum",
        "url": "https://leetcode.com/problems/3sum/",
        "platform": "LeetCode"
      },
      {
        "title": "Longest Substring Without Repeating Characters",
        "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "platform": "LeetCode"
      },
      {
        "title": "Binary Search",
        "url": "https://leetcode.com/problems/binary-search/",
        "platform": "LeetCode"
      },
      {
        "title": "Reverse Linked List",
        "url": "https://leetcode.com/problems/reverse-linked-list/",
        "platform": "LeetCode"
      },
      {
        "title": "Maximum Depth of Binary Tree",
        "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "platform": "LeetCode"
      },
      {
        "title": "Number of Islands",
        "url": "https://leetcode.com/problems/number-of-islands/",
        "platform": "LeetCode"
      },
      {
        "title": "Kth Largest Element in an Array",
        "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        "platform": "LeetCode"
      },
      {
        "title": "Climbing Stairs",
        "url": "https://leetcode.com/problems/climbing-stairs/",
        "platform": "LeetCode"
      },
      {
        "title": "Subsets",
        "url": "https://leetcode.com/problems/subsets/",
        "platform": "LeetCode"
      },
      {
        "title": "LRU Cache",
        "url": "https://leetcode.com/problems/lru-cache/",
        "platform": "LeetCode"
      },
      {
        "title": "Rotting Oranges",
        "url": "https://www.geeksforgeeks.org/problems/rotten-oranges2536/1",
        "platform": "GeeksforGeeks"
      },
      {
        "title": "Sherlock and Anagrams",
        "url": "https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem",
        "platform": "HackerRank"
      }
    ]
  }
];

// ─── STORAGE ─────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'dsa_progress_v1';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    showFeedback('Could not save to localStorage: ' + e.message, 'error');
  }
}

// progress[moduleId][questionIdx] = { status, count, notes, updatedAt }
let progress = loadProgress();

function getQState(moduleId, qIdx) {
  const m = progress[moduleId];
  if (!m || !m[qIdx]) return { status: 'pending', count: 0, notes: '', updatedAt: null };
  return m[qIdx];
}

function setQState(moduleId, qIdx, patch) {
  if (!progress[moduleId]) progress[moduleId] = {};
  const prev = getQState(moduleId, qIdx);
  progress[moduleId][qIdx] = {
    ...prev,
    ...patch,
    updatedAt: new Date().toISOString(),
  };
  saveProgress(progress);
}

// ─── FILTER STATE ─────────────────────────────────────────────────────────────
let filters = { search: '', module: '', platform: '', status: '' };

// ─── UTILS ───────────────────────────────────────────────────────────────────
function platformBadgeClass(platform) {
  if (platform === 'LeetCode') return 'badge-lc';
  if (platform === 'GeeksforGeeks') return 'badge-gfg';
  if (platform === 'HackerRank') return 'badge-hr';
  return 'badge-other';
}

function platformShort(platform) {
  if (platform === 'LeetCode') return 'LC';
  if (platform === 'GeeksforGeeks') return 'GFG';
  if (platform === 'HackerRank') return 'HR';
  return platform;
}

function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function showFeedback(msg, type = 'success') {
  const el = document.getElementById('feedback');
  el.textContent = msg;
  el.className = 'feedback ' + type;
  el.hidden = false;
  clearTimeout(el._timer);
  el._timer = setTimeout(() => { el.hidden = true; }, 4000);
}

// ─── RENDER ──────────────────────────────────────────────────────────────────
function buildModuleSelect() {
  const sel = document.getElementById('filter-module');
  MODULES_DATA.forEach(mod => {
    const opt = document.createElement('option');
    opt.value = String(mod.id);
    opt.textContent = mod.id + '. ' + mod.name;
    sel.appendChild(opt);
  });
}

// Tracks which module IDs are currently expanded so renderAll() can restore state
const expandedModules = new Set();

function renderAll() {
  const container = document.getElementById('modules-container');
  // Capture current expansion state before clearing
  container.querySelectorAll('.module-card.expanded').forEach(card => {
    expandedModules.add(Number(card.dataset.moduleId));
  });
  container.innerHTML = '';
  let anyVisible = false;

  MODULES_DATA.forEach(mod => {
    // apply module filter
    if (filters.module && String(mod.id) !== filters.module) return;

    const card = document.createElement('article');
    card.className = 'module-card';
    card.dataset.moduleId = mod.id;

    // compute per-module stats
    let solved = 0, total = mod.questions.length;
    mod.questions.forEach((_, i) => {
      const s = getQState(mod.id, i).status;
      if (s === 'solved') solved++;
    });
    const pct = total ? Math.round((solved / total) * 100) : 0;

    card.innerHTML = `
      <div class="module-header" role="button" tabindex="0" aria-expanded="false">
        <button class="module-toggle" aria-hidden="true">▶</button>
        <div class="module-num">${mod.id}</div>
        <div class="module-title">${escapeHtml(mod.name)}</div>
        <div class="module-meta">
          <span class="module-counts">${solved}/${total}</span>
          <div class="module-progress-wrap" aria-label="${pct}% solved">
            <div class="module-progress-bar">
              <div class="module-progress-fill" style="width:${pct}%"></div>
            </div>
            <span class="module-pct">${pct}%</span>
          </div>
        </div>
      </div>
      <div class="module-body">
        <ul class="question-list" aria-label="Questions in ${escapeHtml(mod.name)}"></ul>
      </div>
    `;

    const header = card.querySelector('.module-header');
    header.addEventListener('click', () => toggleModule(card));
    header.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleModule(card); } });

    const list = card.querySelector('.question-list');
    let visibleInModule = 0;

    mod.questions.forEach((q, i) => {
      const state = getQState(mod.id, i);
      const visible = matchesFilter(mod, q, state);
      if (visible) visibleInModule++;

      const li = buildQuestionItem(mod, q, i, state, visible);
      list.appendChild(li);
    });

    // auto-expand if filter active and module has visible questions
    const isFiltering = filters.search || filters.platform || filters.status;
    if (isFiltering && visibleInModule > 0) {
      card.classList.add('expanded');
      card.querySelector('.module-header').setAttribute('aria-expanded', 'true');
    }

    // restore expansion state from session
    if (!isFiltering && expandedModules.has(mod.id)) {
      card.classList.add('expanded');
      card.querySelector('.module-header').setAttribute('aria-expanded', 'true');
    }

    if (visibleInModule > 0 || !isFiltering) {
      container.appendChild(card);
      anyVisible = true;
    }
  });

  if (!anyVisible) {
    const p = document.createElement('p');
    p.className = 'no-results';
    p.textContent = 'No questions match your filters.';
    container.appendChild(p);
  }

  updateSummary();
}

function buildQuestionItem(mod, q, i, state, visible) {
  const li = document.createElement('li');
  li.className = 'question-item' + (visible ? '' : ' hidden');
  li.dataset.qIdx = i;

  const badgeCls = platformBadgeClass(q.platform);
  const shortPlatform = platformShort(q.platform);
  const updatedStr = state.updatedAt ? 'Updated: ' + formatDate(state.updatedAt) : '';

  li.innerHTML = `
    <div class="question-left">
      <div class="question-title-row">
        <a class="question-link" href="${escapeHtml(q.url)}" target="_blank" rel="noopener noreferrer"
           aria-label="${escapeHtml(q.title)} (opens in new tab)">
          ${escapeHtml(q.title)}
        </a>
        <span class="platform-badge ${badgeCls}" title="${escapeHtml(q.platform)}">${shortPlatform}</span>
      </div>
      <textarea
        class="question-notes"
        placeholder="Notes…"
        aria-label="Notes for ${escapeHtml(q.title)}"
        rows="1"
      >${escapeHtml(state.notes || '')}</textarea>
      <div class="question-last-updated" aria-live="polite">${updatedStr}</div>
    </div>
    <div class="question-right">
      <select class="status-select status-${state.status}" aria-label="Status for ${escapeHtml(q.title)}">
        <option value="pending"    ${state.status === 'pending'    ? 'selected' : ''}>⏳ Pending</option>
        <option value="inprogress" ${state.status === 'inprogress' ? 'selected' : ''}>🔄 In Progress</option>
        <option value="solved"     ${state.status === 'solved'     ? 'selected' : ''}>✅ Solved</option>
        <option value="review"     ${state.status === 'review'     ? 'selected' : ''}>🔁 Needs Review</option>
      </select>
      <div class="count-controls" aria-label="Solve count">
        <button class="count-btn dec-btn" aria-label="Decrease solve count">−</button>
        <span class="count-display">${state.count}</span>
        <button class="count-btn inc-btn" aria-label="Increase solve count">+</button>
      </div>
      <button class="clear-count-btn" aria-label="Clear solve count">clear</button>
    </div>
  `;

  // Wire events
  const statusSel = li.querySelector('.status-select');
  statusSel.addEventListener('change', () => {
    const newStatus = statusSel.value;
    setQState(mod.id, i, { status: newStatus });
    statusSel.className = 'status-select status-' + newStatus;
    refreshModuleProgress(mod.id);
    updateSummary();
    updateLastUpdated(li, mod.id, i);
  });

  const notesEl = li.querySelector('.question-notes');
  let notesTimer;
  notesEl.addEventListener('input', () => {
    clearTimeout(notesTimer);
    notesTimer = setTimeout(() => {
      setQState(mod.id, i, { notes: notesEl.value });
      updateLastUpdated(li, mod.id, i);
    }, 600);
  });

  li.querySelector('.inc-btn').addEventListener('click', () => {
    const st = getQState(mod.id, i);
    const newCount = st.count + 1;
    setQState(mod.id, i, { count: newCount });
    li.querySelector('.count-display').textContent = newCount;
    updateLastUpdated(li, mod.id, i);
    updateSummary();
  });

  li.querySelector('.dec-btn').addEventListener('click', () => {
    const st = getQState(mod.id, i);
    const newCount = Math.max(0, st.count - 1);
    setQState(mod.id, i, { count: newCount });
    li.querySelector('.count-display').textContent = newCount;
    updateLastUpdated(li, mod.id, i);
    updateSummary();
  });

  li.querySelector('.clear-count-btn').addEventListener('click', () => {
    setQState(mod.id, i, { count: 0 });
    li.querySelector('.count-display').textContent = '0';
    updateLastUpdated(li, mod.id, i);
    updateSummary();
  });

  return li;
}

function updateLastUpdated(li, moduleId, qIdx) {
  const state = getQState(moduleId, qIdx);
  li.querySelector('.question-last-updated').textContent =
    state.updatedAt ? 'Updated: ' + formatDate(state.updatedAt) : '';
}

function matchesFilter(mod, q, state) {
  if (filters.platform && q.platform !== filters.platform) return false;
  if (filters.status && state.status !== filters.status) return false;
  if (filters.search) {
    const needle = filters.search.toLowerCase();
    if (!q.title.toLowerCase().includes(needle) && !mod.name.toLowerCase().includes(needle)) return false;
  }
  return true;
}

function toggleModule(card) {
  const expanded = card.classList.toggle('expanded');
  card.querySelector('.module-header').setAttribute('aria-expanded', String(expanded));
  const id = Number(card.dataset.moduleId);
  if (expanded) expandedModules.add(id);
  else expandedModules.delete(id);
}

function refreshModuleProgress(moduleId) {
  const card = document.querySelector(`[data-module-id="${moduleId}"]`);
  if (!card) return;
  const mod = MODULES_DATA.find(m => m.id === moduleId);
  if (!mod) return;
  let solved = 0;
  mod.questions.forEach((_, i) => {
    if (getQState(mod.id, i).status === 'solved') solved++;
  });
  const total = mod.questions.length;
  const pct = total ? Math.round((solved / total) * 100) : 0;
  const fill = card.querySelector('.module-progress-fill');
  const pctEl = card.querySelector('.module-pct');
  const countEl = card.querySelector('.module-counts');
  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
  if (countEl) countEl.textContent = solved + '/' + total;
}

function updateSummary() {
  let total = 0, solved = 0, inprogress = 0, pending = 0, review = 0, attempts = 0;
  MODULES_DATA.forEach(mod => {
    mod.questions.forEach((_, i) => {
      const st = getQState(mod.id, i);
      total++;
      attempts += st.count;
      if (st.status === 'solved') solved++;
      else if (st.status === 'inprogress') inprogress++;
      else if (st.status === 'review') review++;
      else pending++;
    });
  });
  const pct = total ? Math.round((solved / total) * 100) : 0;

  document.getElementById('val-total').textContent = total;
  document.getElementById('val-solved').textContent = solved;
  document.getElementById('val-inprogress').textContent = inprogress;
  document.getElementById('val-pending').textContent = pending;
  document.getElementById('val-review').textContent = review;
  document.getElementById('val-attempts').textContent = attempts;
  document.getElementById('val-pct').textContent = pct + '%';
  document.getElementById('global-progress-fill').style.width = pct + '%';
}

// ─── FILTER HANDLERS ─────────────────────────────────────────────────────────
function applyFilters() {
  // Instead of full re-render, show/hide items
  document.querySelectorAll('.module-card').forEach(card => {
    const moduleId = Number(card.dataset.moduleId);
    const mod = MODULES_DATA.find(m => m.id === moduleId);
    if (!mod) return;

    if (filters.module && String(moduleId) !== filters.module) {
      card.style.display = 'none';
      return;
    }
    card.style.display = '';

    let visibleCount = 0;
    card.querySelectorAll('.question-item').forEach(li => {
      const qIdx = Number(li.dataset.qIdx);
      const q = mod.questions[qIdx];
      const state = getQState(moduleId, qIdx);
      const vis = matchesFilter(mod, q, state);
      li.classList.toggle('hidden', !vis);
      if (vis) visibleCount++;
    });

    const isFiltering = filters.search || filters.platform || filters.status;
    if (isFiltering && visibleCount > 0 && !card.classList.contains('expanded')) {
      toggleModule(card);
    }
  });
}

// ─── CONTROL WIRING ──────────────────────────────────────────────────────────
function initControls() {
  const searchEl = document.getElementById('search-input');
  searchEl.addEventListener('input', () => {
    filters.search = searchEl.value.trim();
    applyFilters();
  });

  document.getElementById('filter-module').addEventListener('change', function () {
    filters.module = this.value;
    applyFilters();
  });
  document.getElementById('filter-platform').addEventListener('change', function () {
    filters.platform = this.value;
    applyFilters();
  });
  document.getElementById('filter-status').addEventListener('change', function () {
    filters.status = this.value;
    applyFilters();
  });

  document.getElementById('btn-clear-filters').addEventListener('click', () => {
    filters = { search: '', module: '', platform: '', status: '' };
    document.getElementById('search-input').value = '';
    document.getElementById('filter-module').value = '';
    document.getElementById('filter-platform').value = '';
    document.getElementById('filter-status').value = '';
    applyFilters();
  });

  document.getElementById('btn-expand-all').addEventListener('click', () => {
    document.querySelectorAll('.module-card').forEach(card => {
      card.classList.add('expanded');
      card.querySelector('.module-header').setAttribute('aria-expanded', 'true');
    });
  });

  document.getElementById('btn-collapse-all').addEventListener('click', () => {
    document.querySelectorAll('.module-card').forEach(card => {
      card.classList.remove('expanded');
      card.querySelector('.module-header').setAttribute('aria-expanded', 'false');
    });
  });

  document.getElementById('btn-export').addEventListener('click', exportProgress);
  document.getElementById('btn-import').addEventListener('click', () => {
    document.getElementById('import-file').click();
  });
  document.getElementById('import-file').addEventListener('change', importProgress);
  document.getElementById('btn-reset').addEventListener('click', resetProgress);
}

// ─── EXPORT / IMPORT / RESET ─────────────────────────────────────────────────
function exportProgress() {
  const payload = {
    exportedAt: new Date().toISOString(),
    version: 1,
    progress,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'dsa_progress_' + new Date().toISOString().slice(0, 10) + '.json';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); document.body.removeChild(a); }, 1000);
  showFeedback('Progress exported successfully!', 'success');
}

function importProgress(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      // Validate
      if (typeof parsed !== 'object' || !parsed.progress || typeof parsed.progress !== 'object') {
        throw new Error('Invalid file format: missing "progress" object.');
      }
      if (parsed.version !== 1) {
        throw new Error('Unsupported version: ' + parsed.version);
      }
      // Validate inner structure
      for (const [moduleId, questions] of Object.entries(parsed.progress)) {
        if (typeof questions !== 'object') throw new Error('Corrupt module data for module ' + moduleId);
        for (const [qIdx, state] of Object.entries(questions)) {
          const validStatuses = ['pending', 'inprogress', 'solved', 'review'];
          if (state.status && !validStatuses.includes(state.status)) {
            throw new Error('Invalid status "' + state.status + '" in module ' + moduleId);
          }
          if (state.count !== undefined && typeof state.count !== 'number') {
            throw new Error('Invalid count in module ' + moduleId + ' question ' + qIdx);
          }
        }
      }
      progress = parsed.progress;
      saveProgress(progress);
      renderAll();
      showFeedback('Progress imported successfully!', 'success');
    } catch (err) {
      showFeedback('Import failed: ' + err.message, 'error');
    }
    // Reset input so same file can be re-imported
    event.target.value = '';
  };
  reader.readAsText(file);
}

function resetProgress() {
  if (!confirm('Reset ALL progress? This cannot be undone.')) return;
  progress = {};
  saveProgress(progress);
  renderAll();
  showFeedback('All progress has been reset.', 'success');
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
function init() {
  buildModuleSelect();
  renderAll();
  initControls();
}

document.addEventListener('DOMContentLoaded', init);
