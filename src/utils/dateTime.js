/**
 * Utility functions for date and time operations
 */

/**
 * Get current date and time in UTC format (YYYY-MM-DD HH:MM:SS)
 * @returns {string} Formatted date and time string
 */
function getCurrentUTCDateTime() {
    const now = new Date();
    return now.toISOString()
        .replace('T', ' ')
        .replace(/\.\d+Z$/, '');
}

module.exports = {
    getCurrentUTCDateTime
};