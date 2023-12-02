use std::fs;

fn main() {
    // Maximum amount of each colour in the bag
    const MAX_RED: i32 = 12;
    const MAX_GREEN: i32 = 13;
    const MAX_BLUE: i32 = 14;

    // Length of each colour so we can skip to the next colour faster
    const RED_LENGTH: usize = 3;
    const GREEN_LENGTH: usize = 5;
    const BLUE_LENGTH: usize = 4;

    let contents = fs::read_to_string("input.txt").expect("Something went wrong reading the file");
    let lines = contents.lines();

    let mut curr_id = 1;
    let mut sum_of_valid_ids = 0;
    for line in lines {
        let bytes = line.as_bytes();
        let mut i = 0;
        let mut ready = false;
        while i < bytes.len() {
            if bytes[i] == b':' {
                ready = true
            }

            if bytes[i] >= b'0' && bytes[i] <= b'9' && ready {
                let mut curr_num = 0;
                let mut j = i;
                while bytes[j] >= b'0' && bytes[j] <= b'9' {
                    curr_num = curr_num * 10 + (bytes[j] - b'0') as i32;
                    j += 1;
                }
                if bytes[j + 1] == b'r' {
                    if curr_num > MAX_RED {
                        // println!("{} is INVALID because of {} REDS", curr_id, curr_num);
                        break;
                    }
                    i = i + RED_LENGTH;
                } else if bytes[j + 1] == b'g' {
                    if curr_num > MAX_GREEN {
                        // println!("{} is INVALID because of {} GREENS", curr_id, curr_num);
                        break;
                    }
                    i = i + GREEN_LENGTH;
                } else if bytes[j + 1] == b'b' {
                    if curr_num > MAX_BLUE {
                        // println!("{} is INVALID because of {} BLUES", curr_id, curr_num);
                        break;
                    }
                    i = i + BLUE_LENGTH;
                }
            } else {
                i += 1;
            }

            if i == bytes.len() {
                // println!("{} is VALID", curr_id);
                sum_of_valid_ids += curr_id;
            }
        }
        curr_id += 1;
    }

    println!("Sum of valid ids: {}", sum_of_valid_ids);
}
