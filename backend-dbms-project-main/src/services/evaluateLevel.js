module.exports = (value, c) => {
  if (value <= c.panicLow) return { level: 'panic', direction: 'low' };
  if (value >= c.panicHigh) return { level: 'panic', direction: 'high' };

  if (value <= c.alertLow) return { level: 'alert', direction: 'low' };
  if (value >= c.alertHigh) return { level: 'alert', direction: 'high' };

  if (value <= c.infoLow) return { level: 'info', direction: 'low' };
  if (value >= c.infoHigh) return { level: 'info', direction: 'high' };

  return { level: null };
};