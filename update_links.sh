#!/bin/bash

# This script updates the href attributes in index.html to link to the correct product pages.

# --- Product Data ---
products=(
    "Olivier, olea europaea topiaire bonsai"
    "Yucca elephantipes"
    "Areca catechu"
    "Ficus bonsai"
    "Strelitzia Augusta"
    "Dracena indivisa dragona"
    "philodendron selloum"
    "butia capitata"
    "CORDYLINE australis 'Red Star'"
    "Euphorbia milii"
    "Euphorbia ingens"
    "Agave desmetiana 'Variegata'"
    "crassula ovata"
    "Aloe vera"
    "opuntia microdasys"
    "echinocactus grusonii"
    "phoenix roebelenii"
    "Phoenix roebelenii Double tronc"
    "thuja orientalis"
    "Teucrium fruticans (Tree Germander)"
    "strelitzia nicolai"
    "codiaeum variegatum"
    "carica papaya"
)

# --- Old Links to Replace ---
# These are the links currently in index.html that need to be updated.
# Note: The new products have a "#" href.
old_links=(
    "product-olive-trees.html"
    "product-yucca.html"
    "product-areca.html"

    "product-ficus-bonsai.html"
    "product-strelitzia.html"
    "product-dracena.html"
    "#" "#" "#" "#" "#" "#" "#" "#" "#" "#" "#" "#" "#" "#" "#" "#" "#"
)

# Loop through products and update the links in index.html
for i in "${!products[@]}"; do
    product_name="${products[$i]}"
    old_link="${old_links[$i]}"

    # Create the URL-friendly filename
    new_link=$(echo "$product_name" | tr '[:upper:]' '[:lower:]' | tr -s ' ' '-' | sed -e 's/[^a-z0-9-]//g')
    new_link="product-${new_link}.html"

    # Use sed to replace the old link with the new link in index.html
    # We use a temporary file to avoid issues with sed's in-place editing on some systems.
    sed -i.bak "s|href=\"$old_link\"|href=\"$new_link\"|" index.html
    
    echo "Updated link for '$product_name' to '$new_link'"
done

# Clean up the backup file created by sed
rm index.html.bak

echo "index.html has been updated successfully."

