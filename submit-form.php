<?php
// Define the file path for the CSV file where responses will be stored
var_dump($_POST);
die(); 
$file = 'responses.csv';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Debugging: Print out the values
    echo "Discord Username: " . $_POST['discord_username'] . "<br>";
    echo "Discord ID: " . $_POST['discord_id'] . "<br>";
    echo "Past Experience: " . $_POST['past_experience'] . "<br>";
    // Continue echoing out all other fields for debugging...
    
    // Get the form data
    $discord_username = htmlspecialchars($_POST['discord_username']);
    $discord_id = htmlspecialchars($_POST['discord_id']);
    $past_experience = htmlspecialchars($_POST['past_experience']);
    $interest_reason = htmlspecialchars($_POST['interest_reason']);
    $contribution_plans = htmlspecialchars($_POST['contribution_plans']);
    $qualities = htmlspecialchars($_POST['qualities']);
    $standout = htmlspecialchars($_POST['standout']);
    $activity = $_POST['activity'];
    $stress_response = htmlspecialchars($_POST['stress_response']);
    $drama_response = htmlspecialchars($_POST['drama_response']);
    $leaker_response = htmlspecialchars($_POST['leaker_response']);
    $agree_mit = htmlspecialchars($_POST['agree_mit']);
    $agree_guide = htmlspecialchars($_POST['agree_guide']);
    $agree_no_funds_loa = htmlspecialchars($_POST['agree_no_funds_loa']);
    $agree_time_management = htmlspecialchars($_POST['agree_time_management']);
    $roblox_username = htmlspecialchars($_POST['roblox_username']);
    
    // Prepare the data to write to the CSV (escaping commas with quotes)
    $data = [
        $discord_username,
        $discord_id,
        $past_experience,
        $interest_reason,
        $contribution_plans,
        $qualities,
        $standout,
        $activity,
        $stress_response,
        $drama_response,
        $leaker_response,
        $agree_mit,
        $agree_guide,
        $agree_no_funds_loa,
        $agree_time_management,
        $roblox_username,
    ];

    // Open the CSV file (appending the new response)
    if (($handle = fopen($file, 'a')) !== false) {
        // Write the data as a new row in the CSV file
        fputcsv($handle, $data);
        fclose($handle);
    }

    // Redirect user to a "Thank You" page (optional)
    header('Location: thank-you.html');
    exit;
}
?>
