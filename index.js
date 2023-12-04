        const canvasSketch = require('canvas-sketch');

        const settings = {
            dimension: [ 2048, 2048 ]
        };

        const sketch = () => {
            return ({ context, width, height }) => {
                context.fillStyle = 'blue';
                context.fillRect(0, 0, width, height);

                const w = 60;
                const h = 60;
                const gap = 20;
                let x, y;

                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
                        x = i * (w + gap);
                        y = j * (h + gap);

                        context.beginPath();
                        context.rect(x, y, w, h);
                        context.stroke();

                        if (Math.random() > 0.5) {
                            context.beginPath();
                            context.rect(x + w / 4, y + h / 4, w / 2, h / 2);
                            context.stroke();
                        }
                    }
                }
            };
        };

        canvasSketch(sketch, settings);
