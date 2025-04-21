<?php
// Define the file path for the CSV file where responses will be stored
$file = 'responses.csv';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
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

    // Optional: Send a confirmation email
    // Uncomment the lines below to send a confirmation email (change the email to yours)
    // $to = "your-email@example.com";
    // $subject = "JGVRP Staff Application Submission";
    // $message = "A new application has been submitted.\n\nDetails:\n\nDiscord Username: $discord_username\nDiscord ID: $discord_id";
    // $headers = "From: no-reply@example.com";
    // mail($to, $subject, $message, $headers);
    
    // Redirect user to a "Thank You" page (optional)
    header('Location: thank-you.html');
    exit;
}
?>
