# user settings
export CONFIG_COOKBOOK_NAME="mycookbook"
export CONFIG_COOKBOOK_REPO_URL="https://github.com/author/pmwiki-cookbook-mycookbook"
export CONFIG_COOKBOOK_VERSION="1.0.0" # often a date like 20241031 is much more convenient as version
export CONFIG_COOKBOOK_AUTHOR="unknown"

# get lowercase for cookbook name
CONFIG_COOKBOOK_NAME_LC=$(echo "$CONFIG_COOKBOOK_NAME" | tr '[:upper:]' '[:lower:]')
export CONFIG_COOKBOOK_NAME_LC
