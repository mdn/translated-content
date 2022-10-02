find -L . -type f -name "*.html" -print0 | while IFS= read -r -d '' FNAME; do
    mv -- "$FNAME" "${FNAME%.html}.md"
done