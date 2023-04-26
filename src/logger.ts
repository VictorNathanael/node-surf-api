import pino from 'pino';
import config from 'config';

export default pino({
    enabled: config.get('App.logger.enabled'),
    level: config.get('App.logger.level'),
    timestamp: () => {
        const now = new Date(Date.now());
        const day = now.toLocaleString('default', { day: '2-digit' });
        const month = now.toLocaleString('default', { month: '2-digit' });
        const year = now.toLocaleString('default', { year: 'numeric' });
        const time = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });
        return `,"time":"${day}/${month}/${year}, ${time}"`;
    },
});
