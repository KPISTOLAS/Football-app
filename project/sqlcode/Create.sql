CREATE TABLE player_stats (
    name VARCHAR(255) PRIMARY KEY,  -- Unique player name
    nation VARCHAR(255),            -- Player nationality
    position VARCHAR(50),           -- Player position
    age INT CHECK (age >= 0 AND age <= 100),  -- Age with a constraint
    mp INT DEFAULT 0,               -- Matches played (default 0)
    starts INT DEFAULT 0,           -- Matches started (default 0)
    min DOUBLE PRECISION DEFAULT 0, -- Minutes played (default 0)
    goals DOUBLE PRECISION DEFAULT 0, -- Goals scored (default 0)
    asist DOUBLE PRECISION DEFAULT 0, -- Assists (default 0)
    pk DOUBLE PRECISION DEFAULT 0,  -- Power kicks (default 0)
    crdy DOUBLE PRECISION DEFAULT 0, -- Yellow cards (default 0)
    crdr DOUBLE PRECISION DEFAULT 0, -- Red cards (default 0)
    xg DOUBLE PRECISION DEFAULT 0,  -- Expected goals (default 0)
    xag DOUBLE PRECISION DEFAULT 0, -- Expected assists (default 0)
    team VARCHAR(255)               -- Current team
);
