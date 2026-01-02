#!/bin/bash

# Find all HTML files in the current directory and subdirectories
find . -type f -name "*.html" | while read -r file; do
    echo "Processing $file..."

    # 1. Remove the cart button
    sed -i '/<!-- Cart Button -->/,/<\/button>/{/<!-- Cart Button -->/!{/<\/button>/!d}}' "$file"
    sed -i '/<!-- Cart Button -->/d' "$file"
    sed -i '/<button class="action-btn" id="cartButton"/,/<span class="action-count" id="cartCount">0<\/span>/d' "$file"


    # 2. Remove the old mobile language selector dropdown
    sed -i '/<div class="mobile-nav-actions">/,/<\/div>/{/select/d}' "$file"
    sed -i '/<div class="mobile-nav-actions">/d' "$file"


    # 3. Add the new mobile language selector buttons
    # Note: This is a bit tricky with sed, let's try a simple append first, then refine
    # For now, I will add it manually as this is getting complicated
done
