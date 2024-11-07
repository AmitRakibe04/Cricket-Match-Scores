<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cricket Match Scores</title>
    <style>
        :root {
            --background: #ffffff;
            --foreground: #000000;
            --primary: #3b82f6;
            --primary-foreground: #ffffff;
            --muted: #f3f4f6;
            --muted-foreground: #6b7280;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.5;
            color: var(--foreground);
            background-color: var(--background);
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
        }

        h1, h2 {
            margin-bottom: 20px;
        }

        .card {
            background-color: var(--background);
            border: 1px solid var(--muted);
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .live-match {
            background-color: var(--primary);
            color: var(--primary-foreground);
        }

        .live-match h2 {
            margin-top: 0;
        }

        .upcoming-matches ul, .highlights ul {
            list-style-type: none;
            padding: 0;
        }

        .upcoming-matches li, .highlights li {
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--muted);
        }

        .upcoming-matches li:last-child, .highlights li:last-child {
            border-bottom: none;
        }

        .date, .result {
            color: var(--muted-foreground);
            font-size: 0.9em;
        }

        a {
            color: var(--primary);
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        @media (max-width: 600px) {
            body {
                padding: 10px;
            }

            .card {
                padding: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Cricket Match Scores</h1>

        <div class="card live-match">
            <h2>Live Match</h2>
            <p><strong>India vs Australia</strong></p>
            <p>India 287/5 (45.0 ov)</p>
            <p>Live</p>
        </div>

        <div class="card upcoming-matches">
            <h2>Upcoming Matches</h2>
            <ul>
                <li>
                    <strong>England vs New Zealand</strong>
                    <br>
                    <span class="date">2023-06-15</span>
                </li>
                <li>
                    <strong>South Africa vs West Indies</strong>
                    <br>
                    <span class="date">2023-06-16</span>
                </li>
                <li>
                    <strong>Pakistan vs Sri Lanka</strong>
                    <br>
                    <span class="date">2023-06-17</span>
                </li>
            </ul>
        </div>

        <div class="card highlights">
            <h2>Match Highlights</h2>
            <ul>
                <li>
                    <strong>Bangladesh vs Afghanistan</strong>
                    <br>
                    <span class="result">Bangladesh won by 5 wickets</span>
                    <br>
                    <a href="https://example.com/highlight1" target="_blank" rel="noopener noreferrer">Watch Highlights</a>
                </li>
                <li>
                    <strong>Zimbabwe vs Ireland</strong>
                    <br>
                    <span class="result">Ireland won by 3 runs</span>
                    <br>
                    <a href="https://example.com/highlight2" target="_blank" rel="noopener noreferrer">Watch Highlights</a>
                </li>
            </ul>
        </div>
    </div>
</body>
</html>