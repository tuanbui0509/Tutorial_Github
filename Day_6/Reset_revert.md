# Day 6 - git reset and git revert
# 1. git reset undo commit
1. git reset --soft (to_commit)
- Return to the status before the commit is staging area unbox 
2. git reset --mixed (to_commit)
- Return to the status before the addition is working directory 
3. git reset --hard (to_commit)
- Remove loss of commits on the way to Commit to come
- => extremely dangerous

# 2. git revert undo status line 
- Move to the history of this Repository will become a status displayed.
- new commit
- => extremely dangerous
- Another create new commit if you want edit or fix bug