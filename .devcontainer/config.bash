# cookbook settings
export CONFIG_COOKBOOK_NAME="MyCookbook"
# get lowercase for cookbook name
# shellcheck disable=SC2155
export CONFIG_COOKBOOK_NAME_LC=$(echo "$CONFIG_COOKBOOK_NAME" | tr '[:upper:]' '[:lower:]')
export CONFIG_COOKBOOK_VERSION="1.0.0" # often a date like 20241031 is much more convenient as version
export CONFIG_COOKBOOK_AUTHOR="unknown"
export CONFIG_COOKBOOK_REPO_URL="https://github.com/${CONFIG_COOKBOOK_AUTHOR}/pmwiki-cookbook-${CONFIG_COOKBOOK_NAME_LC}"
