class GildedRose {
  processEndOfDay(items) {
    for (let i = 0; i < items.length; i++) {
      this.processItemEndOfDay(items[i]);
    }
  }

  processAgedCheddar(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
    item.daysRemaining = item.daysRemaining - 1;
    if (item.daysRemaining < 0) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }

  processItemEndOfDay(item) {
    if (item.name === "Aged Cheddar") {
      this.processAgedCheddar;
    }
    if (item.name != "Aged Cheddar" && item.name != "Concert Tickets") {
      if (item.quality > 0) {
        if (item.name != "Hammer") {
          item.quality = item.quality - 1;
        }
      }
    } else {
      // Move into processAgedCheddar start
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == "Concert Tickets") {
          if (item.daysRemaining < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.daysRemaining < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    } // Move into processAgedCheddar end

    // Move into processAgedCheddar start
    if (item.name != "Hammer") {
      item.daysRemaining = item.daysRemaining - 1;
    } // end
    if (item.daysRemaining < 0) {
      // Move daysRemaining check < 0 into processAgedCheddar
      if (item.name != "Aged Cheddar") {
        // remove from process aged cheddar
        if (item.name != "Concert Tickets") {
          if (item.quality > 0) {
            if (item.name != "Hammer") {
              item.quality = item.quality - 1;
            }
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          // move into process aged cheddar
          item.quality = item.quality + 1;
        }
      }
    }
  }
}

module.exports = {
  GildedRose,
};
