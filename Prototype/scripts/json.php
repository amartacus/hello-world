<?php

$family_data = [
    'family' => [
        'me' => [
            'full_name' => 'Alex Martinez',
            'dob'       => '11/28/1988'
        ],
        'mom' =>[
            'full_name' => 'Daisy Martinez',
            'dob'       => '11/14/1954'
        ],
        'dad' =>[
            'full_name' => 'Rodolfo Martinez',
            'dob'       => '07/15/56'
        ]
        
    ]
];

echo json_encode($family_data);
?>
