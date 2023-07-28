import csv
from tabulate import tabulate

def read_data_from_csv(file_path):
    keywords, scripts, images = [], [], []
    with open(file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile)
        header = next(reader)  # Skip the header row
        keyword_idx = header.index('Keywords')
        script_idx = header.index('Script (10 points)')
        image_idx = header.index('Image')
        for row in reader:
            if any(field.strip() for field in row):  # Check if any field is not empty
                keywords.append(row[keyword_idx])
                scripts.append(row[script_idx])
                images.append(row[image_idx])
    return keywords, scripts, images

if __name__ == "__main__":
    csv_file = r"C:/Users/Royallams/Downloads/what does the bible say Full List - Youtube Plans.csv"
    keywords, scripts, images = read_data_from_csv(csv_file)

    data = list(zip(keywords, scripts, images))
    headers = ['Keywords', 'Script (10 points)', 'Image']

#print(tabulate(data, headers=headers, tablefmt="plain"))

# Format the data as a table
table = tabulate(data, headers=headers, tablefmt="grid")

# Define the path and filename for the text file
output_file = "output.txt"

# Save the formatted table to the text file
with open(output_file, "w") as file:
    file.write(table)

# Print a message to indicate the export was successful
print(f"Formatted data has been exported to {output_file}")
