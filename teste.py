def longest_slide_down(pyramid):
    soma = 0
    local_index = 0
    for lists in pyramid:

        
        for index,itens in enumerate(lists):

            if len(lists) == 1:
                soma += itens
                break
            else:
                number = max(lists[local_index-1:local_index+2])
                soma += number

                if lists[lists.index(number)] == local_index or lists[lists.index(number)] == local_index+1:
                    local_index = lists.index(number)
                else:
                    if lists[local_index] == number:
                        local_index = local_index
                    else:
                        local_index = local_index+1
                
                break
            
    return soma
print(longest_slide_down([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]))